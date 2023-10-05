public class AnimalLocator {
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
    
   public  void method1(){ 
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

           }

    
}