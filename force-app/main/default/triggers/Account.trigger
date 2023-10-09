/**
 * @Shubhamm          : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 10-05-2023
 * @last modified by  : Shubham
**/
trigger Account on Account (After insert) {
// /Write a trigger, when a new Account is created then create a contact related to that account.
List<Contact>  ContactList= new List<Contact>();
for(Account Acc: trigger.new){
    Contact con= new Contact();
    con.FirstName=Acc.Name;
    con.lastName= Acc.Name + 'last';
    Con.AccountId= Acc.Id;
    ContactList.add(Con);
}
insert ContactList;
// write a trigger to create contact equals to no of  Location field  on Account is updated
}