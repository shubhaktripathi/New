trigger AccountDelete on Account (before delete) {
/*Write a trigger, to achieve the following:

 Given: There is any associated Contact to an Account,

 When: User tries to delete the Account,

 Then: User should get the error that Account with associated Contact can not be deleted.*/

if(trigger.isBefore && trigger.isDelete){
    Map<Id, Account> AccMap = new Map<Id, Account>([select id, (select id FROM contacts) from Account 
    where Id IN:trigger.oldMap.keySet()]);
    for(Account acc:trigger.old){
        if(!AccMap.get(acc.Id).contacts.isEmpty()){
            acc.addError('Account with associated Contact(s) can not be deleted.');
        }
    }

    }
}