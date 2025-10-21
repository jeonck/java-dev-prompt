// Java dev prompts data
const promptsData = [
    {
        id: 1,
        title: "Make Code Easier to Read",
        category: "refactoring",
        prompt: "Make the following Java code cleaner and easier to understand. Use simpler methods where possible.",
        example: `public class TemperatureConverter {
    public double toFahrenheit(double celsius) {
        double result;
        result = (celsius * 9 / 5) + 32;
        return result;
    }
}`,
        solution: `public class TemperatureConverter {
    public double toFahrenheit(double celsius) {
        return celsius * 9 / 5 + 32;
    }
}`,
        explanation: "Takes out extra variables and makes the code simple to read and understand.",
        tags: ["refactoring", "readability", "simple"]
    },
    {
        id: 2,
        title: "Make Code Run Faster",
        category: "performance",
        prompt: "How can we make the following Java code run faster?",
        example: `public List<String> activeUsers(List<User> users) {
    List<String> names = new ArrayList<>();
    for (User u : users) {
        if (u.isActive()) names.add(u.getName());
    }
    return names;
}`,
        solution: `public List<String> activeUsers(List<User> users) {
    return users.stream()
            .filter(User::isActive)
            .map(User::getName)
            .toList();
}`,
        explanation: "Uses Java's built-in stream methods to do the same work in less code that runs faster.",
        tags: ["performance", "faster", "efficient"]
    },
    {
        id: 3,
        title: "Make Code Run Much Faster",
        category: "performance",
        prompt: "Can you make this code run faster? It takes too long with large lists.",
        example: `public boolean containsDuplicate(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j]) return true;
        }
    }
    return false;
}`,
        solution: `public boolean containsDuplicate(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for(int num : nums){
        if(!set.add(num)) return true;
    }
    return false;
}`,
        explanation: "Changes the code from very slow to fast by using a special Java tool that checks for duplicates quickly.",
        tags: ["faster", "performance", "efficient"]
    },
    {
        id: 4,
        title: "Simplify Class Creation",
        category: "modernization",
        prompt: "How can we write this class in a simpler way with newer Java features?",
        example: `public class Student {
    private String name;
    private int age;

    public Student(String name, int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){ return name; }
    public int getAge(){ return age; }
}`,
        solution: `public record Student(String name, int age) {}`,
        explanation: "The new Record feature does the same thing in just one line instead of many lines.",
        tags: ["modernization", "simpler", "new-feature"]
    },
    {
        id: 5,
        title: "Better Error Handling",
        category: "refactoring",
        prompt: "How can we improve this code to handle errors better?",
        example: `try {
    FileInputStream fis = new FileInputStream("data.txt");
} catch (Exception e) {
    e.printStackTrace();
}`,
        solution: `try (FileInputStream fis = new FileInputStream("data.txt")) {
    // process file
} catch (IOException e) {
    System.err.println("Error: " + e.getMessage());
    throw new RuntimeException(e);
}`,
        explanation: "Automatically closes the file when done and shows cleaner error messages.",
        tags: ["error-handling", "safe", "clean"]
    },
    {
        id: 6,
        title: "Create Tests for Your Code",
        category: "testing",
        prompt: "Write tests for the method below to make sure it works correctly in different situations.",
        example: `public int multiply(int a, int b){
    return a * b;
}`,
        solution: `import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    Calculator calc = new Calculator();

    @Test
    void testMultiplyNormal() {
        assertEquals(20, calc.multiply(4, 5));
    }

    @Test
    void testMultiplyByZero() {
        assertEquals(0, calc.multiply(4, 0));
    }

    @Test
    void testMultiplyNegative() {
        assertEquals(-20, calc.multiply(-4, 5));
    }
}`,
        explanation: "Creates tests that check if your code works in normal cases, with zero, and with negative numbers.",
        tags: ["testing", "reliable", "verification"]
    },
    {
        id: 7,
        title: "Make Code Thread-Safe",
        category: "concurrency",
        prompt: "How can we fix this code so it works correctly when multiple threads use it at the same time?",
        example: `public class Counter {
    private int count = 0;
    public void increment(){ count++; }
    public int getCount(){ return count; }
}`,
        solution: `public class Counter {
    private final AtomicInteger count = new AtomicInteger(0);
    public void increment(){ count.incrementAndGet(); }
    public int getCount(){ return count.get(); }
}`,
        explanation: "Fixes problems that happen when multiple parts of your program try to change the same value at once.",
        tags: ["thread-safe", "multi-threading", "reliable"]
    },
    {
        id: 8,
        title: "Save Memory",
        category: "memory",
        prompt: "How can we make this code use less memory?",
        example: `List<String> names = new ArrayList<>();
for(int i=0; i<10000; i++){
    names.add("Name" + i);
}`,
        solution: `List<String> names = new ArrayList<>(10000); // pre-size list`,
        explanation: "Tells the list how many items it will hold, so it doesn't waste memory resizing.",
        tags: ["memory", "efficient", "optimal"]
    },
    {
        id: 9,
        title: "Use Modern Java Features",
        category: "modernization",
        prompt: "Show how to write this code using modern Java features that make it shorter and easier to read.",
        example: `List<Integer> numbers = List.of(1,2,3,4,5);
List<Integer> evenNumbers = new ArrayList<>();
for(int n : numbers){
    if(n % 2 == 0) evenNumbers.add(n);
}`,
        solution: `List<Integer> evenNumbers = numbers.stream()
                                   .filter(n -> n % 2 == 0)
                                   .toList();`,
        explanation: "Does the same thing with less code that's easier to understand and modify.",
        tags: ["modern", "simpler", "efficient"]
    },
    {
        id: 10,
        title: "Handle Large Files Better",
        category: "performance",
        prompt: "Why might this code be slow with large files? How can we make it better?",
        example: `for(String line : Files.readAllLines(Paths.get("largefile.txt"))){
    System.out.println(line);
}`,
        solution: `try (Stream<String> lines = Files.lines(Paths.get("largefile.txt"))) {
    lines.forEach(System.out::println);
}`,
        explanation: "Reads one line at a time instead of loading the entire file into memory at once.",
        tags: ["performance", "memory", "efficient", "large-files"]
    }
];

// DOM elements
const promptsContainer = document.getElementById('promptsContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the page
function init() {
    renderPrompts(promptsData);
    setupEventListeners();
}

// Render prompts to the page
function renderPrompts(prompts) {
    promptsContainer.innerHTML = '';
    
    prompts.forEach(prompt => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.dataset.category = prompt.category;
        
        // Create tags HTML
        const tagsHtml = prompt.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        card.innerHTML = `
            <div class="prompt-header">
                <h3>${prompt.id}. ${prompt.title}</h3>
                <span class="toggle">+</span>
            </div>
            <div class="prompt-content">
                <div class="prompt-section">
                    <h4>Prompt</h4>
                    <p>${prompt.prompt}</p>
                </div>
                <div class="prompt-section">
                    <h4>Example Scenario</h4>
                    <div class="code-block">
                        <pre><code>${escapeHtml(prompt.example)}</code></pre>
                    </div>
                </div>
                <div class="prompt-section">
                    <h4>AI Solution</h4>
                    <div class="code-block">
                        <pre><code>${escapeHtml(prompt.solution)}</code></pre>
                    </div>
                </div>
                <div class="prompt-section">
                    <h4>Why it Helps</h4>
                    <p>${prompt.explanation}</p>
                    <div class="tags">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        `;
        
        promptsContainer.appendChild(card);
    });
    
    // Add click event to headers for expanding/collapsing
    document.querySelectorAll('.prompt-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                toggle.textContent = '+';
            } else {
                content.classList.add('expanded');
                toggle.textContent = '−';
            }
        });
    });
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterPrompts(filter);
        });
    });
}

// Handle search input
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (!searchTerm) {
        // If search is empty, show all prompts
        renderPrompts(promptsData);
        return;
    }
    
    // Filter prompts based on search term
    const filteredPrompts = promptsData.filter(prompt => 
        prompt.title.toLowerCase().includes(searchTerm) ||
        prompt.prompt.toLowerCase().includes(searchTerm) ||
        prompt.explanation.toLowerCase().includes(searchTerm) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    renderPrompts(filteredPrompts);
}

// Filter prompts by category
function filterPrompts(category) {
    if (category === 'all') {
        renderPrompts(promptsData);
        return;
    }
    
    const filteredPrompts = promptsData.filter(prompt => prompt.category === category);
    renderPrompts(filteredPrompts);
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);