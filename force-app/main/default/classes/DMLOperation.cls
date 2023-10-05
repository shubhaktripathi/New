public class DMLOperation {

    public static void praticeDML(){
        
        Account acc= new Account(name='shubham2', phone='1243456789');
        //For Exception  Account acc= new Account(name='shubham', phone='123456789');
        try{
                    insert acc;
                    system.debug(acc.Id);
        }
        catch(Exception e){
            system.debug('exception is '+e);
            
        }
        finally{
            system.debug('Account');
        }
        
       
        
    }
}