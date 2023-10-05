public class SchemaDemo {
    public static void test(){
            Map<String,Object> gd= Schema.getGlobalDescribe();
			system.debug(gd);
        	system.debug(gd.get('Account'));
        	system.debug(gd.keyset());
        
        	Account acc= new Account();
        	system.debug('type is '+acc.getSobjectType());
        
            Map<String,Schema.SobjectType> gd1= Schema.getGlobalDescribe();
        
        	Schema.SObjectType obj= Account.SobjectType;
            system.debug(obj);
        	
        	Schema.SObjectType obj1= Contact.SobjectType;
            system.debug(obj1);
        
        	Schema.DescribeSobjectResult r= Account.sobjectType.getDescribe();
        	system.debug('r is ---->' +r);
        	//Schema.DescribeSobjectResult r= new map<string, object()>;
        	system.debug('r is creatable '+r.isCreateable());
        
        	Map<string, Schema.SObjectField> flMap= r.fields.getMap();
        	Set<string> keys= flMap.keyset();
        	system.debug('flmap '+flMap);
        	system.debug('keys are' + keys);
        	
        Id devRecordTypeId = Schema.SObjectType.Contact.getRecordTypeInfosByName().get('Service Provider Contact').getRecordTypeId();
        system.debug(devRecordTypeId);


        
        
    }
    

}