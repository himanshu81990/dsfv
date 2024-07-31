import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

// in java by default priority queue is min heap,but in c++ it is max heap

public class priorityqueues {
    public static void main(String[] args) {
        
        Queue<Integer>pq=new PriorityQueue<>();

        pq.offer(22);
        pq.offer(21);
        pq.offer(28);
        pq.offer(20);

        System.out.println(pq);

        System.out.println(pq.peek());
        System.out.println(pq.poll());
        System.out.println(pq);


       //to get max heap
       Queue<Integer>q=new PriorityQueue<>(Comparator.reverseOrder());

       q.offer(33);
       q.offer(34);
       q.offer(35);

       System.out.println(q.peek());

    }
}
