trigger AccountTrigger4 on Opportunity (before delete, after update) {
/*If an opportunity is closed then, no one should be able to delete it
 except user having System Administrator profile.
Once an opportunity is marked as closed won, send an email to the following users:
Opportunity Owner
Account Owner */

if(trigger.isDelete ){
    Profile adminProfile = [Select Id From Profile Where Name = 'System Administrator' LIMIT 1];
    for(Opportunity opp:trigger.old){
        if (System.UserInfo.getProfileId()!=adminProfile.Id && (opp.StageName=='Closed won'|| opp.StageName=='Closed Lost')) 
        {
            opp.addError('You do not have necessary permissions to delete Closed opportunities.');

        }

    }

}

if(trigger.isUpdate){}
List<Opportunity> oportunities = [Select id,name, stagename, OwnerId, Account.OwnerId, Owner.Email, Account.Owner.Email From Opportunity where StageName='Closed Won' AND ID IN:Trigger.newMap.keySet()];
if(!oportunities.isEmpty()) {
    // Create an empty list of mail messages which need to be sent.
    List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
    
    for(Opportunity opp : oportunities) {
        Messaging.SingleEmailMessage emailMessage = new Messaging.SingleEmailMessage();
        
        // Check if Opportunity owner and account owner are same
        // if yes, then set only 1 email address to the 'To Address' so that 2 emails are not sent to the same owner
        // else add email of both owners
        // set subject and text body of the email as well and add the email to list of emails
        if(opp.OwnerId == opp.Account.OwnerId) {
            emailMessage.setToAddresses(new List<String> {opp.Owner.Email});
        }
        else {
            emailMessage.setToAddresses(new List<String> {opp.Owner.Email, opp.Account.Owner.Email});
        }
        emailMessage.setSubject('Opportunity - Closed Won');
        emailMessage.setPlainTextBody('Below Opportunity with Opportunity Id and Name is now Closed Won.\n' + 
                                      'Opportunity Id: ' + opp.Id + '\n' +
                                      'Name: ' + opp.Name);
        mails.add(emailMessage);
    }
    // Send list of emails
    Messaging.sendEmail(mails);            
}

}