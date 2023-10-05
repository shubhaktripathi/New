public class AssertEquals {
    public static void assetEquals(){
        Account acc= [Select id, name,phone  from Account where name='Shubham' LIMIT 1];
        system.debug('Acocunt is '+acc);
        acc.phone='0099776556';
        update acc;
	    
        
        Account updatedAccount =[Select id, name ,phone from Account where name='shubham'LIMIT 1];
        System.assertEquals(updatedAccount.phone, acc.name, 'unequal');
        System.assertEquals(updatedAccount.phone, acc.phone, 'unequal');// if they're not equal, then unequal will be showed
       // System.assertNotEquals(updatedAccount.phone, acc.phone, ' equal');
       
    }
}