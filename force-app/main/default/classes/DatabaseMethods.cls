public class DatabaseMethods {
    public static void dmlMethod(){
        List<Contact> con = new List<Contact>{new contact(LastName='mishraJi')};
        //public static Database.SaveResult insert(SObject recordToInsert, Boolean allOrNone, System.AccessLevel accessLevel)
       
         Database.SaveResult[] srList=   database.insert(con, false, AccessLevel.USER_MODE);
            
        for(Database.SaveResult sr:srList){
            if(sr.isSuccess()){
                system.debug('inserted contact id ' +sr.getId());
            }
            else{
                for(Database.Error err:sr.getErrors()){
                    system.debug('The following error has occured');
                    system.debug(err.getStatuscode()+ ':' + err.getMessage());
                }
            }
        }
    }
}