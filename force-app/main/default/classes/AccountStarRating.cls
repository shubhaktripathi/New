public class AccountStarRating {
       @AuraEnabled
       public static void updateAccount(String AccountId,Decimal rating) {
   
   
        List<account> listAcc=[Select Id,Rating__c from Account where Id=:AccountId];

        
        listAcc[0].Rating__c=rating;

        update listAcc;
       
       }


       @AuraEnabled
       public static Decimal getRating(String AccountId) {
   
   
        List<account> listAcc=[Select Id,Rating__c from Account where Id=:AccountId];

        
        return listAcc[0].Rating__c;
       
       }
}