import java.util.LinkedHashSet;
import java.util.Set;

public class Linkedhashett {
    public static void main(String[] args) {
        
         Set<Integer>s=new LinkedHashSet<>();

         s.add(32); 
         s.add(34); 
         s.add(35); 
         s.add(36); 
         s.add(37); 
         s.add(32); 
         s.add(33); 
        
          s.remove(32);
          //...same set fns
         System.out.println(s);
    }
}
