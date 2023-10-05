global class BatchApex1 implements Database.Batchable<sObject>{
/*Create a batch class to update Contacts:
Description of Contact should be updated with
“Title of AccountName : Account’s Description“
Contact which does not have any Account associated with it, should not be updated.
*/
      
    // Getting all the contacts having some accountId populated using Query in start() method 
    global Database.QueryLocator start(Database.BatchableContext bc){
     	system.debug('start method running');
        String query= 'Select Id, Account.Name, title, Account.Description , Description from Contact where AccountId!=null';
        system.debug(Database.Query(query));
        return Database.getQueryLocator(query);
    }
    
    global void execute(Database.BatchableContext bc, List<contact> scope){
        system.debug('scope is ' + scope);
            if(scope!=null){
                for(contact con:scope){
                con.Description = con.Title + ' of ' + con.Account.Name + ': ' + con.Account.Description;
                }
                update scope;
            }
    }
    global void finish (Database.BatchableContext bc) {
             	system.debug('finish method running');

    }
}