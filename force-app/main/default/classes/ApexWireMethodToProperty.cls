public with sharing class ApexWireMethodToProperty {
    @AuraEnabled(cacheable=true)
   public static List<Contact> getContact(){
    try {
         return [SELECT Id, Name, Phone
         FROM Contact
         WITH SECURITY_ENFORCED LIMIT 5];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   
}
}