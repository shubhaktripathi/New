/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 08-29-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public class AccountHandler {


    @AuraEnabled
    public static Account getAcc(ID recordId){
            return [Select id, Name ,website, Phone from Account where Id=:recordId LIMIT 1];
    }


    @AuraEnabled(cacheable=true)
    public static Account getAccount(ID recordId){
            return [Select id, Name ,website, Phone from Account where Id=:recordId LIMIT 1];
    }

    @AuraEnabled
    public static Account updateAccount(Id accId, String acc, Account accObj){
       Account accToUpdate = (Account) JSON.deserialize(acc, Account.class);
       Account ac= [Select id, name, website, Phone from Account where Id=:accId LIMIT 1];
       System.debug(accToUpdate.name);
       //Method 1
     /* ac.Name=accToUpdate.name;
       ac.Phone=accToUpdate.phone;
       ac.website=accToUpdate.website;
       ac.annualrevenue=10000;*/
       //Method 2 
       System.debug('acc is '+ accObj);
       System.debug('acc is '+ accObj.name);
       ac.Name=accObj.Name;
       ac.Phone=accObj.Phone;
       ac.website=accObj.website;
       ac.annualrevenue=10000;
       try {
        update ac;
        return ac;
       } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
       }
    }
    
    @AuraEnabled
    public static case createCase(String descp, String repair, String trouble, Id accId ){
            Case c= new Case(
                Comments= descp,
                SuppliedName= repair,
                Subject= trouble,
                AccountId= accId
            );
            try {
             insert c; 
             return c;  
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
    }

}

    @AuraEnabled
    public static ContentDocumentLink updateDoc(Id accId, Id caseId ){
          
        ContentDocumentLink cl=[   Select id, LinkedEntityId, ContentDocument.title from ContentDocumentLink 
        where LinkedEntityId =:accID ORDER BY CONTENTDOCUMENT.CREATEDDATE DESC LIMIT 1  ];
        ContentDocumentLink newclnk = cl.clone();
        newclnk.LinkedEntityId=caseId;
        insert newclnk;
        delete cl;
        return newclnk;
    }


    


    



    // public static Account insertNewAccount(String accName){       
    //     try{
            
    //         Account a = new Account(Name=accName);
    //         insert a;
    //         System.debug('Bravo Andrè! Account created');
    //         return a;
    //     } catch(Exception e){
    //         System.Debug('Account not created');
    //         return null;
    //     }
    
        
    
}