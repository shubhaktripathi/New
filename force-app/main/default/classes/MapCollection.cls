public class MapCollection {

    /*
     * 
1. Key and value pair
2. Key is always Quique
3. values can duplicate
4. It follows hash structure
5. overrides the values 
6. we can use nested (Collection)list and set in map

Structure (Syntex): 

map<key, value> mapname=new  map<key, value>();
map<string, string> mapname=new  map<string, string>();
map<string, integer> mapname=new  map<string, integer>();
map<id, Account> mapname=new  map<id, account>();

map<id, list<Account>> mapname=new  map<id, list<account>>();

list <Account> acc=[select id, name from account ];
map<id, Account> mapname=new  map<id, account>(acc);

Methods-

put(key,value);
putall(secondmap);
remove(key);
value();
size();
clear();
equals(second map);
clone();
get(key);
containskey(key);
isempty()
keyset()

*/
    
    public static void myMapmethods(){
        
        map<Integer,String> map1= new map<Integer,String>();
        map1.put(1,'Shubham');
        map1.put(2,'Rohit');
        map1.put(3,'Adesh');
        system.debug('map1 is '+map1);
        
        map1.put(1,'Anjali');
        system.debug('map1 is '+map1);

    //putAll Method
        map<Integer,String> s= new map<Integer,string>();
        s.putall(map1);
        
        //Value . Key
        system.debug('values are'+s.values());
        system.debug('keys are'+s.keyset());

        system.debug('size of the Map is'+s.size());
        
        map1.put(2,'Puri');
        system.debug(map1);
        
        //Remove Method
        map1.remove(3);
        system.debug(map1);
        
        //get Method
        system.debug(map1.get(2));
        
        //containsKey 
        system.debug(map1.containskey(1));
        
        
       
    }
}