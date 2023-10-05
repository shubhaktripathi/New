@isTest
private with sharing class AccountDeleteTest {
    
    @TestSetup
    static void makeData(){
        Account acc= new Account(name='TestAccount1');
        insert acc;
        Contact con= new Contact();
        con.LastName='shubhamtripathi';
        con.AccountId=acc.Id;
        insert con; 
    }
    @isTest
    static void testAccountDelete(){
        List<Account> insertedAccount = [Select Id From Account Where Name='TestAccount1'];
        System.assertEquals(1, insertedAccount.size(), 'List should have only 1 account.');
        Test.startTest();
        try {
            delete insertedAccount;
        } catch (DMLException e) {
            System.assert(e.getMessage().contains('Account with associated Contact(s) can not be deleted'),
                             'Account with associated contact should not be deleted.');
        system.assertEquals(1, [Select Id From Account Where Name='TestAccount1'].size(), 
        'Account with associated contact should not be deleted.'); 
        }
       
        Test.stopTest();
    }

}