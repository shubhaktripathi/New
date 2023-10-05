public class GetterSetter {
    public Account accL{get;set;}
    
    public void stu(){
       Account acc= new Account();
        acc.Name='zyz comp';
        insert acc;
    }
     public integer prop {
         get { return prop ;}
      set { prop =value; }
   }
    
   public integer MyReadOnlyProp { get; }
   public double MyReadWriteProp { get; set; }
   public string MyWriteOnlyProp { set; }
    
    public  void method1(String name2){
      //varibale declaration
        String  a;
        Integer b;
        boolean c;
     //  float d;
     //  //decalation and assignment
    String name='Shubham';
        name='yadav';
        //a=b+c;
       ////// Integer name;
    //name=10;
     //Varibale assignment
        name='ayoosh'; 
         b=20;
       // b='Abhay';
       // b='tripathi';
        c=false;
        c=true;
        //c=10;
        Date d= Date.newInstance(2022,9,26);
        system.debug(d);
     //  Integer  [] ab=new Integer[5]{10,20,30,40,};
         //  Integer [] abc=new Integer[5]();
       //abc.push(10);
           
       //DEMO LIST
       List<Integer> li= new List<Integer>();
       li.add(100);
       system.debug(li);
       system.debug('my name is shubham');
       li.add(200);
       li.add(200);
       li.add(300);
       system.debug('LI is' + li);
       system.debug('My List Value is ' + li.get(1));
       li.add(1,150);
        system.debug('My List Value is ' + li);

              List<Integer> li1=new List<Integer>();
       li1.addAll(li);
              system.debug('li1  ' + li1);
              List<Integer> li2=new list <Integer>();
       li2.add(100);
       		 system.debug(li.contains(200));
              		 system.debug(li.equals(li1));


     //system.debug(li+li1);
     system.debug(li.indexof(150));
List<Account> student = [Select id,name from Account];
       system.debug(student.getSobjectType());
            //system.debug(li.getSobjectType());
            system.debug(li.hashCode());
       li.remove(0);
       system.debug(li.size());
       system.debug(li.toString()); 
       Set<Integer> et = new Set<Integer>();
       et.add(100);
       et.add(100);et.add(200);
       et.add(200);
       system.debug(et);
       et.addAll(li);
       system.debug('set is'+et);
       system.debug('list is'+li);
       system.debug(et.containsAll(li));
              Set<Integer> et1 = new Set<Integer>();
       et1.add(100);et1.add(200);
       et1.clear();
       et1.add(100);et1.add(200);et1.add(100);et1.add(150);et1.add(300);
       system.debug('sets are equal ' + et1.equals(et));
Set<integer> mySet = new Set<integer>{1, 2, 3};
List<integer> myList = new List<integer>{1, 3};
 Boolean result = mySet.removeAll(myList);
system.debug('set is'+ myset);
Map<Integer, String> m1 = new Map<Integer, String>();
m1.put(1, 'First item');
m1.put(2, 'Second item');
       m1.put(1,'third item');
    system.debug(m1.containskey(1));
           system.debug(m1.values());
Map<Integer, String > mapName= New Map<Integer, String>();
    mapName.put(0,'Shubham');
    mapName.put(1,'Adesh');
       system.debug('map is '+mapName);
       system.debug('keys is '+mapName.keySet());
       system.debug('keys is '+mapName.values());
// SOQL Query
String name1=name2;
	List<Account> accList= [Select Id, Name from Account where Name like '%abh%' limit 1];
    List<Account> accList1= [Select Id, Name from Account where Name =:name1];
    List<Account> accList2= [Select Id, Name from Account where Name ='Shubham'];
       system.debug(accList);
       system.debug('List is '+ accList1);
       List<Opportunity> oppList= [Select Id, Name, StageName from Opportunity where StageName='Closed Won'];
       system.debug(oppList);
        

}
    
}