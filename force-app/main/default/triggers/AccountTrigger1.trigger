trigger AccountTrigger1 on Account (after insert) {
//Write a trigger, if the owner of an account is changed 
//then the owner for the related contacts should also be updated.
Set<Id> AccId = new Set<Id>();    
if(trigger.isAfter && trigger.isUpdate)
{
    for(Account Acc:trigger.new){
        if(Acc.OwnerId!=trigger.oldMap.get(Acc.Id).OwnerId){
            AccId.add(Acc.Id);
        }
    }


    if(AccId.size()!=0)
    {
        List<Contact> ConList = [Select Id , ownerId from Contact where AccountId=:AccId];
            for (Contact co : ConList) {
                co.OwnerId=Trigger.newMap.get(co.AccountId).OwnerId;
            }
            update ConList;
    }

}
}