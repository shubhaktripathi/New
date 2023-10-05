public class AccountUtils {
    public static List<Account> accountsByState(String Stage){    
        List<Account> acc= [Select id, name, billingstate from Account where billingstate=: stage ];
        return acc;

    }
}