public class SetCollection {
/*

1. Do not contain duplicate
2. Unordered
3. Set can also conrain nested set
4. Primitive

Declaration-

Set<string> setname=new Set<String>();
Set<Integer> setname=new Set<Integer>();
Set<Account> setname=new Set<Account>();

Methods In set:
add(setelements);
addall(list);
addall(set);
clear();
clone();
equals();
contains(single element);
containsall(compair with list);
size();
isempty();
remove(single set elment);
removeall();

*/
    
    public static void mySetMethod(){
        //Add Method
        set<String> mySet= new set<String>();
        mySet.add('Shubham');
        mySet.add('Rohit');
        mySet.add('Adesh');
        mySet.add('Adesh');
        system.debug('mySet is'+mySet);
        
        // AddAll method
        set<String> mySet1= new set<String>(); 
        mySet1.addAll(mySet);
        system.debug('mySet1 is'+mySet1);
        
        //myset1.clear();
        //system.debug(mySet1);
        
        set<String> mySet2= new set<String>{'Puri','Tripathi','Mishra'};
        mySet.addAll(mySet2);
        system.debug(mySet);
        
        //clone Method
        set<String> mySet3=myset.clone();
        system.debug(mySet);
        
        
        //contains Method
        system.debug(myset.contains('Shubham'));
        system.debug(myset.contains('shubham'));
		system.debug(myset.size());
        
        //remove method
        myset.remove('Shubham');
        system.debug(myset);
        
        myset.removeall(myset1);
        system.debug(myset);
        
        //containsAll
        
        system.debug('myset is '+myset);
        system.debug('myset3 is '+myset3);
        system.debug(myset.containsAll(myset3));
        system.debug(myset3.containsAll(myset));

        
    }
}