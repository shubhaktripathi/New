public with sharing class BatchApex3 implements Database.Batchable<sObject>  ,Database.Stateful {
/*Use Case:
(Database.Stateful and Outbound functionality Use)
Create a batch class which would:
Update all the account records owner to some new owner. 
(Example, Previous owner – abc@riteshgupta2492.com, New owner – xyz@riteshgupta2492.com)
AND send an email to new owner mentioning total number of account records updated.
*/

public Integer numberOfAccountsProcessed=0;
private String oldUserId;
private String newUserId;

// Constructor which takes the argument as UserIds.
// oldUserId: Id of the User/AccountOwner which needs to be changed for accounts
// newUserId: Id of the User/AccountOwner to which accounts need to be updated
public BatchApex3(String oldUserId, String newUserId) {
    this.oldUserId = oldUserId;
    this.newUserId = newUserId;
}

public Database.QueryLocator start(Database.BatchableContext bc){
    system.debug('start method is running');
    String query='Select Id, ownerId from Account Where OwnerId= \'' + oldUserId + '\'';
    system.debug(oldUserId);
    System.debug(newUserId);
    system.debug(Database.query(query));
    return Database.getQueryLocator(query);
}

public void execute(Database.BatchableContext bc, List<Account> scope){
    for(Account acc : scope) {
            acc.OwnerId=newUserId;
            numberOfAccountsProcessed++;
    }
        update scope;
    system.debug(scope);


}
public void finish(Database.BatchableContext bc) {
    Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
    email.setToAddresses(new List<String> {newUserId});
    email.setSubject('Total Accounts Updated');
    email.setPlainTextBody('Below is the total number of Accounts whose new Owner is you:\n' + numberOfAccountsProcessed);    
    Messaging.sendEmail(new List<Messaging.SingleEmailMessage> {email});
    system.debug('finish method');
}
    
    /*executing this batch
     * BatchApex3 b= new BatchApex3('2F0055g00000DlzBM','2F0055g00000Dmz3e');
Id jobid= Database.executeBatch(b);*/
    
}