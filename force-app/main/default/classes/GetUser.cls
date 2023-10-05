/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 08-25-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class GetUser {
   @AuraEnabled(cacheable=true)
   public static List<user>  getUsers(){
    List<Profile> admin= [Select Id from Profile where Name='System Administrator' OR Name='Standard User'];
    Set<Id> adminId=new Set<Id>();
            for (Profile a : admin) {
                adminId.add(a.Id);
            }
    try {
        return [select id, name from user where IsActive=true and ProfileId IN:adminId  ORDER BY NAME DESC];
        } 
        catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }


   @AuraEnabled(cacheable=true)
   public static UserRecordAccess   checkPermissions(Id leadId,  Id userId){
    System.debug('Id is '+LeadId);
    //Profile admin= [Select Id from Profile where Name='Standard User' LIMIT 1];
    //User u = [Select id, name from User where ProfileId=:admin.Id and Name='Service Support' LIMIT 1];
    UserRecordAccess uAcc=[SELECT RecordId, HasReadAccess,HasEditAccess,  HasTransferAccess, MaxAccessLevel
     FROM UserRecordAccess
     WHERE UserId =:userId
     AND RecordId =:leadId ];  
       //or Record IN [list of IDs]
    return uAcc;
    }



    
   @AuraEnabled
   public static UserRecordAccess   updatePermission(Id leadId,  Id userId){
    System.debug('Id is '+LeadId);
    //Profile admin= [Select Id from Profile where Name='Standard User' LIMIT 1];
    //User u = [Select id, name from User where ProfileId=:admin.Id and Name='Service Support' LIMIT 1];
    LeadShare l= new LeadShare();
    l.LeadId=leadId;
    l.RowCause='Manual';
    l.LeadAccessLevel='Edit';
    l.UserOrGroupId=userId;
    try {
        insert l;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }

    UserRecordAccess uAcc=[SELECT RecordId, HasReadAccess,HasEditAccess,  HasTransferAccess, MaxAccessLevel
     FROM UserRecordAccess
     WHERE UserId =:userId
     AND RecordId =:leadId ];  
       //or Record IN [list of IDs]
    return uAcc;
    }
    }