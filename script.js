// Java dev prompts data
const promptsData = [
    {
        id: 1,
        title: "Refactor Java Code for Clarity",
        category: "refactoring",
        prompt: "Refactor the following Java code to make it cleaner, more readable, and aligned with best practices. Use modern Java features where possible.",
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
        explanation: "Removes unnecessary variables and makes code easier to read and maintain.",
        tags: ["refactoring", "readability", "best-practices"]
    },
    {
        id: 2,
        title: "Optimize for Performance",
        category: "performance",
        prompt: "Analyze the following Java code and suggest performance improvements, explaining the reasons.",
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
        explanation: "Using IntStream reduces boilerplate and is more efficient for large data sets. Cleaner and ready for parallel processing.",
        tags: ["performance", "streams", "efficiency"]
    },
    {
        id: 3,
        title: "Explain Time Complexity",
        category: "performance",
        prompt: "Explain the time and space complexity of the following method in Big-O notation, and suggest improvements.",
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
        explanation: "Reduces time complexity from O(n²) to O(n), teaching efficient coding.",
        tags: ["complexity", "performance", "efficiency"]
    },
    {
        id: 4,
        title: "Modernize Old Java Code",
        category: "modernization",
        prompt: "Convert this Java code to use modern features like Records, Streams, and switch expressions.",
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
        explanation: "Records reduce boilerplate, encourages immutability.",
        tags: ["modernization", "records", "java-14"]
    },
    {
        id: 5,
        title: "Improve Exception Handling",
        category: "refactoring",
        prompt: "Suggest better exception handling for this code using best practices.",
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
        explanation: "Uses try-with-resources and avoids catching generic exceptions.",
        tags: ["exception-handling", "best-practices", "resources"]
    },
    {
        id: 6,
        title: "Generate Unit Tests",
        category: "testing",
        prompt: "Write JUnit 5 tests for the method below, including edge cases.",
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
        explanation: "Automates test creation, saving time and teaching test coverage.",
        tags: ["testing", "junit", "coverage"]
    },
    {
        id: 7,
        title: "Detect Concurrency Issues",
        category: "concurrency",
        prompt: "Analyze for concurrency problems and suggest thread-safe solutions.",
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
        explanation: "Prevents race conditions and teaches safe multi-threaded programming.",
        tags: ["concurrency", "thread-safe", "atomic"]
    },
    {
        id: 8,
        title: "Memory Optimization",
        category: "memory",
        prompt: "Suggest ways to reduce memory usage in this snippet.",
        example: `List<String> names = new ArrayList<>();
for(int i=0; i<10000; i++){
    names.add("Name" + i);
}`,
        solution: `List<String> names = new ArrayList<>(10000); // pre-size list`,
        explanation: "Pre-sizing avoids costly resizing and saves memory.",
        tags: ["memory", "optimization", "efficiency"]
    },
    {
        id: 9,
        title: "Convert Code to Functional Style",
        category: "modernization",
        prompt: "Rewrite this code using functional style with Streams and lambdas.",
        example: `List<Integer> numbers = List.of(1,2,3,4,5);
List<Integer> evenNumbers = new ArrayList<>();
for(int n : numbers){
    if(n % 2 == 0) evenNumbers.add(n);
}`,
        solution: `List<Integer> evenNumbers = numbers.stream()
                                   .filter(n -> n % 2 == 0)
                                   .toList();`,
        explanation: "Shorter, easier to read, and ready for parallelization.",
        tags: ["functional", "streams", "lambdas"]
    },
    {
        id: 10,
        title: "Explain Why Code is Slow",
        category: "performance",
        prompt: "Can you explain why this code might be slow? Please suggest improvements, point out the performance bottlenecks, and recommend ways to profile and analyze its performance.",
        example: `for(String line : Files.readAllLines(Paths.get("largefile.txt"))){
    System.out.println(line);
}`,
        solution: `try (Stream<String> lines = Files.lines(Paths.get("largefile.txt"))) {
    lines.forEach(System.out::println);
}`,
        explanation: "Streams read files lazily instead of loading everything into memory.",
        tags: ["performance", "memory", "streams", "efficiency"]
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