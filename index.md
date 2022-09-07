## Princeton Ferro
**Email**: [princetonferro@gmail.com](mailto:princetonferro@gmail.com?subject=This%20is%20from%20a%20bot%20change%20this%20subject%20if%20you%20are%20not%20a%20bot)    
**GitHub**: [https://github.com/Prince781](https://github.com/Prince781)    
**LinkedIn**: [https://www.linkedin.com/in/princeton-ferro/](https://www.linkedin.com/in/princeton-ferro/)

### Interests
compilers, languages, runtimes, toolchains, operating systems, parallel programming

### Skills
#### Languages
- C, Python, Vala (great)
- C++, C#, JavaScript, TypeScript (good)
- Java (familiar with, but haven't touched in awhile)

#### Tools
`vim`, `gdb`, `rr`, `valgrind`, `perf`, `git`, `meson`, `make`  

### Institutions    
**New York University (2019-2022)**    
Masters in Computer Science

**University of Rochester (2015-2019)**    
Bachelor of Science, Computer Science    

**Bergen County Academies (2011-2015)**    
High School diploma

### Projects

#### Vala
- Vala is a high-level programming language that compiles to C which then
  compiles to native code. It takes inspiration from C# and other languages.
  Vala has been used to write many applications for Linux and is
  used extensively by the [elementaryOS](https://elementary.io/) and
  [GNOME](https://www.gnome.org/) projects/desktop environments.
- I'm the main developer of the [Vala Language
  Server](https://github.com/vala-lang/vala-language-server), as well as [a
  templating system for Vala projects](https://github.com/vala-lang/valdo), and
  I [hack on the Vala compiler](https://gitlab.gnome.org/GNOME/vala/-/commits/master?author=Princeton%20Ferro).
  I also contribute a bit to the rest of the GNOME stack.
- Vala Language Server has [over 200 stars](https://github.com/vala-lang/vala-language-server/stargazers),
  and the Visual Studio plugin has [over 9k installs](https://marketplace.visualstudio.com/items?itemName=prince781.vala).
  The language server is officially supported in [GNOME Builder](https://wiki.gnome.org/Apps/Builder), the official IDE of GNOME

#### LSTF
- A domain-specific programming language for testing language servers. Still a work in progress.
- The language is based on JSON data types, with closures and asynchronous programming thrown in the mix.
- The implementation has an optimizing compiler, stack-based virtual machine, and language runtime.
- Source: [https://github.com/Prince781/lstf](https://github.com/Prince781/lstf)

#### Cache-Conscious Hash Array-Mapped Trie for Rust (2018)
- Alternative to `std::collections::HashMap` that uses a lock-free trie with
  a contiguous allocator for elements, improving scalability with multiple
  threads.
- Source: [https://github.com/chichunchen/concurrent-cache-conscious-hamt-in-rust](https://github.com/chichunchen/concurrent-cache-conscious-hamt-in-rust)

#### Dynamic GPU Acceleration of Linear Algebra Computations (2017-2019)
- A drop-in replacement for BLAS and LAPACK that interops with cuBLAS or clBLAS
  to implement GPU acceleration in scientific applications.
- Paper: [http://prince781.net/files/dyn_gpu_accel_lin_alg.pdf](http://prince781.net/files/dyn_gpu_accel_lin_alg.pdf)

### Research

#### Managing Application Parallelism through Parallel Efficiency Regulation (2018-2021)
- A daemon that optimizes system resource allocation by monitoring per-application performance metrics using hardware counters.
- Poster: [https://prince781.net/files/mapper-ppopp-poster2019.pdf](https://prince781.net/files/mapper-ppopp-poster2019.pdf)
- Paper: [https://prince781.net/files/mapper-taco2022.pdf](https://prince781.net/files/mapper-taco2022.pdf)
- Source: [https://github.com/URCS-systems/MAPPER/tree/release](https://github.com/URCS-systems/MAPPER/tree/release)

### Employment

#### [NVIDIA](http://nvidia.com) (June 2022 - present)
_Compiler Development Engineer - Remote / NJ / Santa Clara, CA_

- Work on compiler optimizations for GPU compute (CUDA, OpenCL)

#### [L3Harris Technologies](http://l3harris.com) (August - September 2020)    
_Intern - Space and Airborne Systems, Clifton, NJ_  

- Implemented a test framework in Python for flight and mission control software

#### [Cray (now HPE)](http://cray.com) (May - August 2019)    
_Compiler Software Intern, Bloomington, MN_  

- Improved OpenMP performance in Cray's clang+LLVM fork with optimizations for OpenMP fork/join  
- Improved debugging support with Cray's OpenMP runtime `libcraymp`  
- Poster: [http://prince781.net/files/cray-poster.pdf](http://prince781.net/files/cray-poster.pdf)

#### [BrightLogic](http://brightlogic.com) (October 2014 - August 2015, June - August 2017)    
_Software Engineer Intern, Midland Park, NJ_  

- Developed a GUI for monitoring hardware state of the ActiveFloor (a floor with interactive panels)  
- Developed a [video game](https://www.youtube.com/watch?v=yJM4E6coUKY) for the ActiveFloor
- Created a centralized configuration manager for various software components, using Angular and C#  
- Created libraries and tools for ActiveFloor software  
- Rapidly prototyped demo apps for the ActiveFloor to show to customers

### Teaching
#### Teacher's Assistant - Programming Language Design and Implementation (September 2018 - December 2018)
_University of Rochester_  

- Drafted and graded assignments, tests, and quizzes. Held office hours with students.
