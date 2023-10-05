@isTest
private with sharing class BatchApex1Test {
    
    @TestSetup
    static void makeData(){
List<Account> accList = new List<Account>();        
for (Integer i=0 ; i<10; i++) {
 accList.add(new Account(Name='Test Acc'+i, Description='Account '+i));
}
insert accList;
List<contact> conList = new List<contact>();
for (Account acc : accList) {
    for (Integer j = 0; j < 5; j++) {
        conList.add(new contact(LastName='contactL'+j, AccountId=acc.id, title='Sales Executive'));        
    }
    
}
 // Contacts with no Account populated
 for(Integer k=0; k<20; k++) {
    conList.add(new Contact(LastName = 'NewCon'+k,
                                  Title = 'IT Engineer'));
}
insert conList;
}

@isTest
static void testMethod_ContactsWithAccounts() {
    // Verify that description is empty for all the contacts before the batch class is executed
    List<Contact> contactsBeforeUpdation = [Select Id, Description From Contact];
    for(Contact con : contactsBeforeUpdation) {
        System.assert(con.Description == null, 'Description should not be empty');
    }
    
    Test.startTest();
    BatchApex1 batchClass = new BatchApex1();
        Database.executeBatch(batchClass, 100);
    Test.stopTest();

    
     // Assert that description should be updated for Contacts with Account
     List<Contact> contactsAfterUpdation_Acc = [Select Id, Description, Account.Name, Title From Contact Where AccountId != null];
     for(Contact con : contactsAfterUpdation_Acc) {
         System.assert(con.Description != null, 'Description should not be empty');
         System.assert(con.Description.contains(con.Account.Name), 'Description should contain Account Name');
         System.assert(con.Description.contains(con.Title), 'Description should contain Contact Title');
     }
     
     // Assert that description should not be updated and remain empty for Contacts with no Account
     List<Contact> contactsAfterUpdation_noAcc = [Select Id, Description, Account.Name From Contact Where AccountId = null];
     for(Contact con : contactsAfterUpdation_noAcc) {
         System.assert(con.Description == null, 'Description should not be empty');
     }  
}
}