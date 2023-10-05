public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static  List<Account> getAccList(){
        try {
           
            List<Account> acc= [select id, name, AnnualRevenue ,Industry from Account LIMIT 20];
            return acc;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable= true)
    public static  List<Account> getAccList1(String name){
        try {
            String key = '%' + name + '%';
            List<Account> con= [select id, name from Account where Name Like : key with SECURITY_ENFORCED];
            return con;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}