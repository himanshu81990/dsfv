import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

public class LinkedLists {
    public static void main(String[] args) {
        
        LinkedList<String>ll=new LinkedList<>();
    //listmethods same as list
        ll.add("ravi");
        ll.add("sham");
        ll.add("bang");
       
        Iterator<String>itr=ll.iterator();

        while(itr.hasNext()) {
            System.out.println(itr.next());
        }
        
        //queue methods

        Queue<Integer>q=new LinkedList<>();

        q.offer(2);
        q.offer(3);
        q.offer(4);

        System.out.println(q);

        System.out.println(q.poll());

        System.out.println(q);

        System.out.println(q.peek());
    }
}
