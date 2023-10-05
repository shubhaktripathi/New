public class sobjectUses {

    public static void pratice(){
        
        Account acc= new Account();
        Sobject obj= new Account();
        //type casting
        Account Acc1 = (Account)obj;
        acc1.name= 'test';
        acc1.Phone= '123456789';
        system.debug('acc1 is '+acc1);
        
        Student__c std= new student__c(name='shubham', Marks__c=100);
     // date myDate = date.newInstance(2001, 3, 21);
     // date newInstance
         std.Admission_Date__c= date.newInstance(2023, 4, 21);
        system.debug('student is'+std);
        
        List<Account> accList=[Select id, name , phone from Account LIMIT 2];
        Set<id> accId = new Set<id>();
        for(Account a:accList){
            system.debug(a);
            accId.add(a.Id);
        }
        system.debug('ids are'+ accId);
        
        Map<Id, Account> idToAccountMap= new Map<Id, Account>([Select id, Name from Account LIMIT 2]);
        system.debug('map is '+ idToAccountMap);
        
         Map<Id, Account> idToAccountMap1= new Map<Id, Account>(accList);
         system.debug('map is '+ idToAccountMap1);
        
        if(!accId.isEmpty()){
            for(Id i:accId){
                if(idToAccountMap.containskey(i)){
                    System.debug('map value is'+idToAccountMap.get(i));
                }
            }
        }


        
    }
}