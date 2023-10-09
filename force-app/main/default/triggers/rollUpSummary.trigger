trigger rollUpSummary on Contact (after insert, after update, after delete, after undelete) {
 Set<id> accId = new Set<id>();
    if(trigger.isUpdate|| trigger.isUndelete || trigger.isInsert){
        
        for(Contact con:trigger.new){
            if(con.AccountId!=null){
                accId.add(con.AccountId);
            }
        }
    }

    if(trigger.isUpdate || trigger.isDelete){
        for(Contact con:trigger.old){
            if(con.AccountId!=null){
                accId.add(con.AccountId);
            }
        }
    }

    if(!accId.isEmpty()){
        List<Account> accList =[SELECT Id, No_of_Contacts__c, (SELECT Id FROM Contacts) 
        FROM Account WHERE Id IN : accId];
        if(!accList.isEmpty()){
            List<Account> updateAccList= new List<Account>();
            for(Account acc:accList){
                Account objAcc = new Account(Id = acc.Id, No_of_Contacts__c = acc.Contacts.size());
                updateAccList.add(objAcc);
            }
            if(!updateAccList.isEmpty()){
                update updateAccList;
            
            }
        }


    }

}