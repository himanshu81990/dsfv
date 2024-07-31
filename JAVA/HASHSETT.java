import java.util.HashSet;
import java.util.Set;

public class HASHSETT {
    public static void main(String[] args) {
        
        Set<Integer>s=new HashSet<>();
       s.add(33);
       s.add(33);
       s.add(35);
       s.add(36);
       System.out.println(s);

       s.remove(33);

       System.out.println(s.contains(35));

       System.out.println(s.isEmpty());
    }
}
