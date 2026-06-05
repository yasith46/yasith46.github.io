export const projects = [
  {
    id: 'cai',
    name: 'Chip-Aware Instrument',
    image: '/img/cai3.jpeg',
    heroImages: { left: '/img/cai3.jpeg', topRight: '/img/cai2.png', bottomRight: '/img/cai4.jpeg' },
    year: 2026,
    type: 'Team Project',
    category: 'Final Year Project',
    description: 'Final Year Project -- A unified hardware/software platform for IC configuration and evaluation...',
    skills: ['PCB Design', 'FPGA', 'Embedded Linux', 'Hardware Design', 'Signal Processing', 'Python', 'C/C++', 'System Integration'],
    fullDescription: [
      'The Chip-Aware Instrument is a unified hardware/software platform designed for comprehensive IC configuration, evaluation, and characterization. This system bridges the gap between design and practical implementation, and aims to cut down the cost of development, time to development and the barrier of entry for new chip choices. Usually when choosing a new chip for the design, engineers have to buy an evaluation board and spend considerable time and resources on learning and testing. Further each IC requires its own evaluation board costing hundreds of dollars, with each requiring vendor-specific tools and documentation. Our platform aims to unify this effort and cut down the time of getting familiar.',
      'Our solution contains a datasheed to ICED file generation pipeline, with which the datasheet is first read into a markdown file with the help of several extraction tools, and upon verification converts the markdown into a yaml file called "ICED" describing the registers, interfaces, configuration sequences, power sequences, absolute ratings, etc. Then this file is used by an agentic pipeline to generate a dynamic GUI with the workbenches unique for the device under test. The software uses a server-client approach to communicate with the hardware.',
      'For the hardware, a Linux OS is running on an ARM processor on programmable software part on a KR260 Robotics Starter Kit FPGA Board, on which a Daemon process interfaces the commands from the software recieved through ethernet to the HAL layer. The HAL layer interfaces the software part with the IPs that are on the programmable logic part of the FPGA. These IPs integrate with the expansion board in order to communicate with the device under test.',
      'The expansion board is a 6 layer PCB interfaced with the FPGA. The purpose of this is to interface the 3.3V digital only IO of the FPGA to the analog, 5V / 3.3V / 1.8V signals. This contains an ADC and a DAC with each able to provide analog signals between 100 Hz - 7.5 MHz. On board there is a GPIO expander which is able to provide additional GPIO pins which are also capable of prividing PWM outputs. These and the digital signals such as SPI, I2C, I2S, PDM are then sent through a set of volatge translators of which the output volatge is selectable with the platform. The analog signals are sent through a programmable gain array to allow a wider dynamic range of 4Vpp. Further each ADC and the DAC are provided with an onboard PLL. Each of the units have been provided with seperate power domains for the best noise isolation and test domain sepeartion.'
    ],
    gallery: [
      { image: '/img/cai3.jpeg', title: 'FPGA Integration', description: 'The KR260 Robotics Starter Kit FPGA Board, connected to the expansion board, and 2 evaluation boards and a custom PCB hooked up as devices under test' },
      { image: '/img/expansion3.jpeg', title: 'Expansion board', description: 'The expansion board connecting the FPGA to the device under test' },
      { image: '/img/cai4.jpeg', title: 'Software Platform', description: 'The dynamic GUI which has generated a waveform viewer workbench for the TAC5212 on real-time' }
    ]
  },
  {
    id: 'andon',
    name: 'Wireless Reconfigurable Andon System',
    image: '/img/andon1.jpeg',
    heroImages: { left: '/img/andon1.jpeg', topRight: '/img/andon4.jpg', bottomRight: '/img/andon3.webp' },
    year: 2024,
    type: 'Team Project',
    category: 'Smart Manufacturing',
    description: 'A system to alert and document production issues, equipped with maintenance prediction...',
    skills: ['IoT', 'Wireless Communication', 'Manufacturing Systems', 'Embedded Systems', 'Python', 'Real-time Monitoring'],
    fullDescription: [
      'The Wireless Reconfigurable Andon System with Maintenance Prediction is designed to alert production teams issues in real-time. This system modifies the traditional Andon approach of taking down the statusues manually by incorporating wireless technology and real-time data analytics. The aim of this solution is to improve the production capability of the industry by enabling faster response times and more efficient problem resolution.',
      'The project is made of 4 key parts - the frontend consoles at each machine, the backend server for data processing, the frontends of management console and the technician console. The frontend console consists of a user interface where the issues can be programmed to correspond to each button. Further this system allows integration with sensors to identify potential issues WiFi. This console is built around an ESP32, with a mesh network. Power is supplied through the internal SMPS power supply.',
      'The management console allows the management of the console network, addition of new nodes, new issues, and setting the responsible technical teams. The technician console provides a dedicated interface for maintenance personnel to view and address reported issues. The backend integrates these interfaces, while recording the andon calls to a database for future analysis, and running the maintenance prediction algorithms.',
      'Whenever an issue occurs, the operator will press the button corresponding to the issue, and this will alerted to the assigned technical teams. Once the technical teams are there, they can address the issue, and then release the andon call. All these data are saved in the database denothing the downtimes. Further the sensor data is used to verify the issue had been solved and the operation is continuing.'
    ],
    gallery: [
      { image: '/img/andon1.jpeg', title: 'Andon System and Management Console', description: 'The operator pressing a button triggers an alert on the management console' },
      { image: '/img/andon4.jpg', title: 'PCB of the Console', description: 'Console based on the ESP32 microcontroller, with the SMPS power supply, and the wires going to switches.' },
      { image: '/img/andon3.webp', title: 'SW Consoles', description: 'The management console screens and the technician console where the alerts are displayed.' }
    ]
  },
  {
    id: 'metroband',
    name: 'Metroband',
    image: '/img/metroband.png',
    heroImages: { left: '/img/metroband.png', topRight: '/img/metroband2.png', bottomRight: '/img/metroband3.png' },
    year: 2023,
    type: 'Team Project',
    category: 'Wearable Technology',
    description: 'A vibrating metronome on a wristband to help musicians keep rhythm during recordings...',
    skills: ['Wearable Design', 'Haptic Feedback', 'Embedded Systems', 'Firmware', 'PCB Design', 'Music Technology'],
    fullDescription: [
      'Metroband is a metronome on a wristband helping the mucisians keep up the tempo. Usual metronomes are physical instruments that keep the tempo by a clicking sound. Tempo is the speed of the music, and when praactising the mucisians need to practice to play by the said tempo, specially when theres multiple mucisians. However we have made the metronome wearable and haptic - it vibrates, doesn\'t make noise. This can be specially beneficial for musicians who need to maintain rhythm in noisy environments or during recordings.',
      'The device consists of a PCB based on an ESP32. It has a TFT display on with a custom interface, and custom fonts designed to mimic the older VFD displays, which were often used in audio equipment back in the day. This connects to a mobile app on the phone where you can control the device through BLE. It further connects and syncs up with other metrobands, syncing the start time for the mucisians of the same group. The device itself too has the controls, with a rotary encoder for manual adjustment. Further the device keeps the charge upto 2-3 hours under continuos operation. Further the device has an onboard BMS with a fuel gauge IC to detect charge level, and a BMS IC to charge the Li-ion battery that powers up the device.',
      'The device runs firmware parallely on different tasks, ensuring the timing of the vibrations is accurate. The coin vibrator is controlled in one task, and the connection is kept up and the display is controlled with the other task. Further it includes a low-power mode to extend battery life during extended use. When not in use, the metroband can stay upto 2-3 days.'
    ],
    gallery: [
      { image: '/img/metroband.png', title: 'Metroband with the display on', description: 'The font on the display is custom built to imitate the old VFD dispalys' },
      { image: '/img/metroband2.png', title: 'Metroband in operation', description: 'Metroband in operation while a guitar player is playing, while wearing the device.' },
      { image: '/img/metroband3.png', title: 'PCB Design', description: 'The PCB design integrates all components into a compact and efficient layout.' }
    ]
  },
  {
    id: 'overdrive',
    name: 'Overdrive Pedal',
    image: '/img/overdrive.jpeg',
    heroImages: { left: '/img/overdrive.jpeg', topRight: '/img/overdrive1.jpeg', bottomRight: '/img/overdrive2.jpeg' },
    year: 2023,
    type: 'Solo Project',
    category: 'Audio Electronics',
    description: 'A guitar pedal designed to provide overdrive distortion effects...',
    skills: ['Audio Electronics', 'Audio Circuit Design', 'PCB Design', 'Analog Electronics', 'Distortion Effects', 'Guitar Pedal Design'],
    fullDescription: [
      'This overdrive pedal is designed to provide an overdrive effect to the guitar sound. This specific design is known as a tube screamer. This gives the iconic rock music sound to the clean guitar signal.',
      'The pedal consists of an operational amplifier, with a pair of clipping diodes set to the feedback signal, distorting the waveform by clipping the peaks softly, i.e.: to clip the peaks slowly. Usually the saturation is treated as a undesirable effect. However in rock music and many other genres such as rock and roll, metal, punk, this distorted sound is desireable to give a heaviness to the otherwise clean guitar sound.',
      'The pedal also has a tone control circuit, which is a passive low pass filter, to give the user the ability to shape the sound to their liking. The pedal is built with high quality components and a robust enclosure to ensure durability and reliability.'
    ],
    gallery: [
      { image: '/img/overdrive.jpeg', title: 'Overdrive Pedal', description: 'The pedal with the wooden enclosure and the knobs controlling the gain and filters' },
      { image: '/img/overdrive1.jpeg', title: 'PCB of the pedal', description: 'PCB made on a locally manufactured board, with a compact design' },
      { image: '/img/overdrive2.jpeg', title: 'Playing with overdrive', description: 'Playing the guitar with the overdrive pedal engaged' }
    ]
  },
  {
    id: 'unet',
    name: 'Hardware Accelerator for U-Net',
    image: '/img/dvcon.jpeg',
    heroImages: { left: '/img/dvcon.jpeg', topRight: '/img/dvcon2.jpeg', bottomRight: '/img/dvcon3.jpeg' },
    year: 2024,
    type: 'Team Project',
    category: 'Deep Learning Hardware',
    description: 'A custom hardware accelerator designed to speed up the inference process of a self-driving U-Net...',
    skills: ['Deep Learning', 'Hardware', 'FPGA Design', 'HLS (High-Level Synthesis)', 'Verilog/VHDL', 'Performance Optimization', 'Embedded ML'],
    fullDescription: [
      'This project implements a custom hardware accelerator for U-Net neural networks, specifically optimized for autonomous vehicle inference tasks. The accelerator dramatically reduces inference latency compared to CPU/GPU implementations while maintaining energy efficiency for deployment in edge devices. This project was done as a submission for the DVCON2025-India competition and was chosen to the third round.',
      'The design utilizes dataflow architecture with pipelined convolution layers to maximize throughput. Custom memory hierarchies and bandwidth optimization techniques ensure data movement never becomes a bottleneck, allowing the compute units to operate at peak utilization.',
      'The accelerator was synthesized on FPGA platforms and demonstrated significant speedups for real-time autonomous driving applications, processing full-resolution video frames within strict latency budgets required for safety-critical systems.'
    ],
    gallery: [
      { image: '/img/dvcon.jpeg', title: 'Block Diagram', description: 'Block diagram of showing the way that the accelerator IP is connected to the CPU and the DMA' },
      { image: '/img/dvcon2.jpeg', title: 'Simulation', description: 'Some simulation results from the IP' },
      { image: '/img/dvcon3.jpeg', title: 'Model', description: 'The UNET model that is being accelerated' }
    ]
  },
  {
    id: 'sportsense',
    name: 'SportSense',
    image: '/img/sportsense.png',
    heroImages: { left: '/img/sportsense.png', topRight: '/img/sportsense2.png', bottomRight: '/img/sportsense3.jpg' },
    year: 2023,
    type: 'Team Project',
    category: 'Sports Analytics',
    description: 'A mobile application and a smart mirror for tracking and analyzing sports performance...',
    skills: ['Mobile Development', 'Computer Vision', 'Smart Mirror', 'React Native', 'IoT Integration', 'Performance Analytics'],
    fullDescription: [
      'SportSense is a sport and workout trainer app that redefines personal fitness by offering real-time, adaptive feedback. Unlike generic fitness applications that offer static routines, SportSense utilizes computer visionto instantly correct your form during workouts. By integrating a dynamic Text-to-Speech API, the app provides immediate audio cues that guide your movements as they happen.',
      'Built on cutting-edge Edge AI, all analytical models run directly on-device, meaning the personal biometric and workout data never leaves the phone. To keep the user motivated, the app pairs this privacy with interactive gamification features, including community leaderboards that let you challenge friends and compete with a global network of fitness enthusiasts, almost in a social-media like environment.'
    ],
    gallery: [
      { image: '/img/sportsense4.png', title: 'Mobile App', description: 'Android application for the SportSense platform' },
      { image: '/img/sportsense2.png', title: 'Pose detection', description: 'Real-time feedback during training sessions' },
      { image: '/img/sportsense3.jpg', title: 'Idealize 2024', description: 'Team METRONIX at Idealize 2024, first runners up' }
    ]
  },
  {
    id: 'alu',
    name: '32-bit Floating Point ALU',
    image: '/img/alu.png',
    heroImages: { left: '/img/alu.png', topRight: '/img/alu2.jpeg', bottomRight: '/img/alu3.jpeg' },
    year: 2023,
    type: 'Solo Project',
    category: 'Digital Design',
    description: 'ALU to provide single precision floating point addition, subtraction, multiplication and division...',
    skills: ['Digital Design', 'Verilog/VHDL', 'Floating Point Arithmetic', 'FPGA Design', 'Digital Logic', 'Arithmetic Circuits'],
    fullDescription: [
      'This 32-bit ALU is a specialized processor designed for IEEE-754 Single Precision floating-point operations, developed as part of the EN3021 Digital Design Systems module at the University of Moratuwa. The architecture is built around a four-stage pipeline, optimized for high-throughput arithmetic. The Adder, Subtractor, and Multiplier modules are fully pipelined, each requiring three clock cycles to produce a result. In contrast, the Divider operates on a non-pipelined basis, requiring 25 cycles for completion. To synchronize these varying latencies, the design utilizes a \'bench\' stage to hold exponent data during the more intensive mantissa calculations.',
      'A significant challenge in this architecture is the management of out-of-order execution. Since different operations conclude at different times, an external reordering mechanism is necessary to ensure data integrity and proper instruction sequencing. While the system effectively handles standard floating-point exceptions—including divide-by-zero, overflow, and infinity—it currently lacks an internal mechanism to prevent collisions when multiple operations attempt to complete simultaneously. This makes it an excellent foundation for further development in hazard detection and stall-logic implementation.'
    ],
    gallery: [
      { image: '/img/alu.png', title: 'Block Diagram', description: 'Block diagram of the overall architecture with pipeline stages' },
      { image: '/img/alu2.jpeg', title: 'Simulation Results', description: 'Simulation of the floating point adder' },
      { image: '/img/alu3.jpeg', title: 'Multiplier', description: 'Multiplier implemented using the Wallace Tree design' }
    ]
  },
  {
    id: 'pedal',
    name: 'Multi-effect Guitar Pedal',
    image: '/img/pedal.jpeg',
    heroImages: { left: '/img/pedal.jpeg', topRight: '/img/pedal2.png', bottomRight: '/img/pedal3.jpeg' },
    year: 2023,
    type: 'Team Project',
    category: 'Audio Electronics',
    description: 'A versatile guitar pedal that combines multiple effects in a single unit...',
    skills: ['Audio Electronics', 'Digital Signal Processing', 'Embedded Firmware', 'Audio Effects', 'ARM Microcontroller', 'Real-time Processing'],
    fullDescription: [
      'The Guitar Pedalboard is a modular signal processing system designed for instruments like electric guitars and violins. The hardware architecture features a multi-stage signal chain, beginning with a preamplifier and tone controller for frequency management (bass, mid, and treble). It incorporates a dual-rail power supply providing ±5V, ±12V, and ±18V to drive the analog circuitry and a final power amplifier stage for output.',
      'The system integrates six primary analog effects: Compressor, Wah, Overdrive/Distortion, Fuzz, Tremolo, and a Tone Controller. Each module was designed and verified through simulation and breadboard testing to ensure specific audio characteristics, such as consistent loudness via the compressor and rhythmic amplitude modulation via the tremolo. The final implementation involved custom PCB design, switchboard routing, and a dedicated enclosure to house the complete signal chain.'
    ],
    gallery: [
      { image: '/img/pedal.jpeg', title: 'Enclosure', description: 'Enclosure of the pedalboard made with laser cut wood' },
      { image: '/img/pedal2.png', title: 'PCB design', description: 'Single layer PCB design for the pedal' },
      { image: '/img/pedal3.jpeg', title: 'PCB', description: 'Pedal fabricated on a locally manufactured PCB' }
    ]
  },
  {
    id: 'riscv',
    name: '32-bit RISC-V Processor',
    image: '/img/riscv.jpeg',
    heroImages: { left: '/img/riscv.jpeg', topRight: '/img/riscv2.jpeg', bottomRight: '/img/riscv4.jpeg' },
    year: 2023,
    type: 'Solo Project',
    category: 'CPU Design',
    description: 'A custom-designed pipelined RISC-V processor with 32-bit architecture with 5 stages...',
    skills: ['CPU Design', 'Verilog', 'Processor Design', 'Pipelining', 'RISC-V ISA', 'Computer Architecture', 'FPGA Implementation'],
    fullDescription: [
      'This 32-bit RISC-V processor implements the RV32I base instruction set, excluding privileged instructions, using a classic five-stage pipeline. Based on a Harvard architecture with separate instruction and data paths, the design integrates an L1 cache and a dedicated branch predictor to optimize throughput. The register file consists of 32 architecturally visible physical registers, adhering strictly to the RISC-V ISA specifications.',
      'To maintain pipeline integrity, the microarchitecture includes logic to handle branch stalls and mispredictions by flushing the pipeline when necessary. The system is synthesized for the DE2-115 FPGA platform, achieving a maximum operating frequency (Fmax) of 50 MHz. This implementation balances standard RISC-V compatibility with efficient hardware resource utilization for academic and embedded applications.'
    ],
    gallery: [
      { image: '/img/riscv.jpeg', title: 'Output Result', description: 'Result of the output displayed on the 7-segment display, implemented as a memory mapped IP' },
      { image: '/img/riscv2.jpeg', title: 'Simulation Results', description: 'The simulation result for the execution of a program' },
      { image: '/img/riscv4.jpeg', title: 'Program Execution', description: 'Program that is being executed on the processor' }
    ]
  },
  {
    id: 'robot',
    name: 'Task Oriented Robot',
    image: '/img/robot.jpeg',
    heroImages: { left: '/img/robot.jpeg', topRight: '/img/robot2.jpeg', bottomRight: '/img/robot3.jpeg' },
    year: 2022,
    type: 'Team Project',
    category: 'Robotics',
    description: 'A line follower robot which can navigate a line, avoid obstacles and perform tasks...',
    skills: ['Robotics', 'Line Following', 'Obstacle Avoidance', 'Embedded C', 'Sensor Integration', 'Motor Control'],
    fullDescription: [
      'This autonomous system was developed for the \'Robot Design and Competition\' module at the University of Moratuwa. Built on the Arduino MEGA 2560 platform, the robot is engineered for high-precision navigation and environment interaction within a competitive arena. It features a robust PID-based line-following algorithm capable of traversing ramps with inclines up to 20°, paired with a custom mechanical arm specifically designed to grip, lift, and transport 5cm cubic objects to target zones.',
      'The robot\'s intelligence is driven by an integrated sensor suite that enables complex behavioral responses, including color detection for zone identification and sound-triggered commands for start/stop functionality. For dynamic environments, the system utilizes real-time obstacle detection to identify and avoid moving guard robots, ensuring reliable path adjustments and collision avoidance. This combination of modular manipulation and adaptive sensing allows the robot to execute multifaceted tasks with high autonomy and efficiency.'
    ],
    gallery: [
      { image: '/img/robot.jpeg', title: 'Robot from the front', description: 'With the ultrasonic sensors and robot arm' },
      { image: '/img/robot2.jpeg', title: 'Robot from the back', description: 'With the Arduino MEGA and the buck controller' },
      { image: '/img/robot3.jpeg', title: 'Line Follower', description: 'The robot following a lighter line on a darker background' }
    ]
  },
  {
    id: 'battlebot',
    name: 'Battlebot - "Inky Pinky Ponky"',
    image: '/img/battlebot.jpeg',
    heroImages: { left: '/img/battlebot.jpeg', topRight: '/img/battlebot2.jpeg', bottomRight: '/img/battlebot3.jpeg' },
    year: 2022,
    type: 'Team Project',
    category: 'Combat Robotics',
    description: 'A battlebot with a spade able to go through and withstand blunt force...',
    skills: ['Combat Robotics', 'Combat Robot Design', 'Mechanical Engineering', 'Weapon Systems', 'Durability Analysis', 'RC Control Systems'],
    fullDescription: [
      'Inky Pinky Ponky is a combat robot engineered for the UWV Robot Battle 2024, designed with a focus on durability and defensive mobility. The mechanical structure was developed using SolidWorks, featuring a steel frame chassis and a 4-wheel drive system for superior traction and arena control. Its primary weapon is a high-torque active lifting mechanism specifically designed to flip opponent bots. The heavy armour is meant to protect from the high-impact collisions.',
      'The electronic architecture includes custom-designed PCBs developed in Altium to manage the power distribution and signal processing required for a custom RF remote control system. During the UWV Robot Battle 2024, the robot demonstrated significant reliability and tactical effectiveness, securing a 7th-place finish overall.'
    ],
    gallery: [
      { image: '/img/battlebot.jpeg', title: 'The battlebot', description: 'The battlebot with the painted enclosure' },
      { image: '/img/battlebot2.jpeg', title: 'Robot without the enclosure on', description: 'PCB visible and the internal mechanism of the spade visible' },
      { image: '/img/battlebot3.jpeg', title: 'Death race track', description: 'The track on which the robot was to be raced on' }
    ]
  },
  {
    id: 'uart',
    name: 'UART Transceiver',
    image: '/img/uart.jpeg',
    heroImages: { left: '/img/uart.jpeg', topRight: '/img/uart2.jpeg', bottomRight: '/img/uart3.jpeg' },
    year: 2022,
    type: 'Solo Project',
    category: 'Digital Design',
    description: 'A UART transciever on DE0-Nano, tested with the onboard LEDs and another transciever...',
    skills: ['Digital Design', 'Verilog', 'UART Protocol', 'FPGA Design', 'Serial Communication', 'Altera DE0-Nano'],
    fullDescription: [
      'This project focuses on the design and implementation of a UART transceiver using Verilog RTL. The architecture consists of three primary modules: a baud rate generator to establish timing synchronization, a transmitter to convert parallel data into a serial bitstream, and a receiver to reconstruct parallel data from incoming serial signals. The design supports standard asynchronous serial communication protocols, allowing for reliable device-to-device data exchange without a shared clock signal.',
      'The implementation was validated through a testbench and hardware synthesis on an FPGA platform. The verification process involved simulating the transceiver\'s performance across various baud rates and data frames to ensure timing accuracy and data integrity. The final hardware deployment utilizes physical pin mapping for RX and TX lines, with integrated status indicators such as busy signals and ready flags to manage data flow and interface with external digital systems.'
    ],
    gallery: [
      { image: '/img/uart.jpeg', title: 'FPGA Implementation', description: 'Two transceivers implemented on DE0-Nano FPGA' },
      { image: '/img/uart2.jpeg', title: 'Block Diagram', description: 'Block diagram of the UART transceiver design' },
      { image: '/img/uart3.jpeg', title: 'Simulation Results', description: 'Simulation results of the UART transceiver design' }
    ]
  },
  {
    id: 'ecowatt',
    name: 'ECOWATT',
    image: '/img/ecowatt.jpeg',
    heroImages: { left: '/img/ecowatt.jpeg', topRight: '/img/ecowatt2.jpeg', bottomRight: '/img/ecowatt3.jpeg' },
    year: 2022,
    type: 'Team Project',
    category: 'Energy Management',
    description: 'An energy monitoring system firmware for a solar power inverter...',
    skills: ['Energy Management', 'Firmware Development', 'Power Electronics', 'Energy Monitoring', 'Embedded Systems', 'IoT', 'Solar Inverter'],
    fullDescription: [
      'The EcoWatt project is an energy management system designed to address efficient power distribution and battery storage. The architecture focuses on monitoring and regulating the energy flow. The project was to connect the power inverter to an IoT network for real-time data collection and analysis.',
      'The system connected to the inverter through a MODBUS interface, and to the network through WiFi via HTTP protocol. The firmware is made to poll the inverter to collect data, send it to the backend at an interval set beforehand. This interval can be set on runtime through the backend, and the firmware can be updated remotely. Further the settings like what data to be requested, some parameters of the inverter can be set through the backend interface remotely.'
    ],
    gallery: [
      { image: '/img/ecowatt3.jpeg', title: 'Dashboard', description: 'Real-time energy monitoring dashboard' },
      { image: '/img/ecowatt.jpeg', title: 'Firmware', description: 'A code snippet from the firmware' },
      { image: '/img/ecowatt2.jpeg', title: 'State Diagram', description: 'Petri net detailing the state transitions' }
    ]
  },
  {
    id: 'flood',
    name: 'Flood-level Sensor',
    image: '/img/flood-det.jpeg',
    heroImages: { left: '/img/flood-det.jpeg', topRight: '/img/flood-det2.jpeg', bottomRight: '/img/flood-det3.jpeg' },
    year: 2022,
    type: 'Team Project',
    category: 'Environmental Monitoring',
    description: 'A sensor system to monitor and alert about flooding conditions and to predict the water levels...',
    skills: ['Environmental Monitoring', 'IoT Systems', 'Sensor Integration', 'Wireless Communication', 'Water Level Sensing', 'Alert Systems', 'Predictive Analytics'],
    fullDescription: [
      'This project implements an IoT-based flood monitoring and alerting system designed to track water levels in real-time. The hardware architecture utilizes ultrasonic sensors for non-contact distance measurement to calculate water depth, interfaced with a microcontroller that processes the data and handles communication. The system is designed to trigger visual and auditory alerts via LEDs and buzzers once the water level exceeds predefined safety thresholds.',
      'The software stack manages data acquisition, threshold logic, and network connectivity for remote monitoring. By utilizing low-power communication protocols, the system can transmit live telemetry to a centralized dashboard or mobile interface, enabling early warning notifications. The integration of robust sensing and cloud-based data logging ensures high reliability for flood risk assessment and historical data analysis in vulnerable environments.'
    ],
    gallery: [
      { image: '/img/flood-det.jpeg', title: 'A Node', description: 'A node which detects the flood level' },
      { image: '/img/flood-det2.jpeg', title: 'Operation', description: 'The system in operation' },
      { image: '/img/flood-det3.jpeg', title: 'Dashboard', description: 'The NodeRED dashboard for data visualization' }
    ]
  },
  {
    id: 'uart_chip',
    name: 'Parallel to UART Chip',
    image: '/img/ic.jpeg',
    heroImages: { left: '/img/ic.jpeg', topRight: '/img/ic2.jpeg', bottomRight: '/img/ic3.jpeg' },
    year: 2021,
    type: 'Solo Project',
    category: 'Digital Design',
    description: 'A chip to convert between a parallel data interface and a UART interface...',
    skills: ['Digital Design', 'Verilog', 'Protocol Conversion', 'FPGA Design', 'Interface Design', 'Digital Logic'],
    fullDescription: [
      'This project focuses on the complete Digital IC Design flow, centered on the RTL-to-GDSII transition for a hardware module. The synthesis phase involves transforming Verilog RTL into a gate-level netlist using specific technology libraries, where timing constraints are established via SDC files to define system clocks and asynchronous resets. Through iterative optimization of target frequencies, the design is refined to balance total cell area and power consumption, ensuring the logic meets worst-case setup and hold timing requirements.',
      'The backend implementation covers the physical design stages, including floorplanning, cell placement, and Clock Tree Synthesis (CTS). Key focus is placed on transforming ideal clock nets into balanced trees to minimize insertion delay and skew, followed by post-route timing verification using On-Chip Variation (OCV) analysis. To ensure manufacturability and meet metal density requirements, the flow incorporates the addition of filler cells and metal fills, finalizing the layout for physical verification.'
    ],
    gallery: [
      { image: '/img/ic.jpeg', title: 'After clock optimisation', description: 'After clock optimisation to make sure the skew is minimal' },
      { image: '/img/ic2.jpeg', title: 'Cell placement', description: 'IC after the cell placement' },
      { image: '/img/ic3.jpeg', title: 'Power routing', description: 'IC after the power routing is done' }
    ]
  },
  {
    id: 'signify',
    name: 'Signify',
    image: '/img/signify.png',
    heroImages: { left: '/img/signify.png', topRight: '/img/signify2.jpeg', bottomRight: '/img/signify3.jpeg' },
    year: 2021,
    type: 'Team Project',
    category: 'Communication Tech',
    description: 'A VR application and a smart glasses solution for speech to sign language conversion...',
    skills: ['Communication Tech', 'Mobile App Development', 'Sign Language Recognition', 'Computer Vision', 'Machine Learning', 'Real-time Processing', 'Accessibility'],
    fullDescription: [
      'Signify is an innovative AR application developed for smart glasses, designed to bridge communication gaps for hearing-impaired individuals by providing real-time speech-to-sign language translation. By utilizing advanced voice recognition, the system instantly detects spoken language and converts it into accurate sign language gestures performed by a personalized 3D \'Interpreter Buddy.\' This on-device assistant empowers users to engage in fluid, daily conversations independently, eliminating the need for external human interpreters.',
      'The technical architecture of the platform is built on the Unity Engine, which manages high-fidelity 3D rendering and seamless integration with AR SDKs for wearable hardware. Users can fully customize the avatar\'s appearance and hand gestures to suit their personal preferences, ensuring a comfortable and engaging user experience. Recognized for its technical excellence, the project secured a first-place finish at VR Cade 2025, demonstrating its potential as a high-impact assistive technology in the field of immersive computing.'
    ],
    gallery: [
      { image: '/img/signify.png', title: 'Unity Engine', description: 'The workings of the AR sign language interpreter' },
      { image: '/img/signify2.jpeg', title: 'Interface on PC', description: 'The interface made for PC for testing' },
      { image: '/img/signify3.jpeg', title: 'Smart Glasses', description: 'Schematics for the smart glasses prototype' }
    ]
  },
  {
    id: 'crystalclear',
    name: 'Project CrystalClear',
    image: '/img/crystalclear.png',
    heroImages: { left: '/img/crystalclear.png', topRight: '/img/crystalclear2.png', bottomRight: '/img/crystalclear3.jpeg' },
    year: 2020,
    type: 'Team Project',
    category: 'Educational Technology',
    description: 'A platform to help students with dyslexia to have therapy exercises...',
    skills: ['Computer Vision', 'Dyslexia Support', 'Interactive Learning', 'Audio Analysis', 'Behavioral Tracking', 'Mobile Application', 'Assistive Technology'],
    fullDescription: [
      'CrystalClear is an interactive learning platform developed to support the education of dyslexic students through advanced Computer Vision and audio analysis. The system\'s primary mission is to provide real-time engagement monitoring by tracking a student\'s finger position as they follow lines of text and analyzing mouth movements to verify pronunciation accuracy. This multimodal approach ensures that students remain focused on the material while receiving immediate feedback on their reading technique, effectively bridging the gap between independent study and professional speech therapy.',
      'Technically, the platform utilizes a gamified architecture consisting of structured levels and interactive stories that adapt to a student\'s individual progress. By integrating on-device AI for behavioral tracking and progress monitoring, CrystalClear generates detailed reports for parents and educators to assess learning milestones. Recognized for its innovative application of assistive technology, the project was presented at the Brainstorm Competition, highlighting its potential to improve literacy outcomes for students with learning differences.'
    ],
    gallery: [
      { image: '/img/crystalclear.png', title: 'Fingerpose Detection', description: 'Dyslexia exercises automated with fingerpose detection' },
      { image: '/img/crystalclear2.png', title: 'Website', description: 'Website with several interactive exercises' },
      { image: '/img/crystalclear3.jpeg', title: 'Brainstorm\'24', description: 'Team METRONIX at the Brainstorm\'24 finals' }
    ]
  },
  {
    id: 'xplore',
    name: 'Xplore',
    image: '/img/xplore.png',
    heroImages: { left: '/img/xplore.png', topRight: '/img/xplore3.png', bottomRight: '/img/xplore2.jpeg' },
    year: 2021,
    type: 'Team Project',
    category: 'Travel & Tourism',
    description: 'A travel platform which recommends hidden gems along the route...',
    skills: ['Travel & Tourism', 'Full-stack Development', 'Travel Planning', 'Location APIs', 'Database Design', 'Recommendation Engine', 'Web Development'],
    fullDescription: [
      'Xplore is an AI-powered travel companion designed to bridge the gap between automated itinerary planning and community-driven discovery. The platform features a robust route-tracking engine that logs travel paths in real-time, allowing users to build a personal history of their journeys or publish them for the benefit of the wider community. By leveraging a curated database and historical data from other travelers, the integrated AI engine generates tailored recommendations that align with specific user requirements, such as finding the most scenic paths or the fastest transit options.',
      'The application\'s technical architecture emphasizes visual interactivity, plotting itineraries directly onto a map interface to help users understand the geographical flow of their trips. This is complemented by a dynamic community feed where travelers can browse, follow, and draw inspiration from shared routes. Recognized for its innovative approach to personalized travel, the project was showcased at AI Expo 2025, highlighting its ability to combine data-driven suggestions with a social hub for modern explorers.'
    ],
    gallery: [
      { image: '/img/xplore.png', title: 'Route Explorer', description: 'Recommending routes available from start to the destination' },
      { image: '/img/xplore3.png', title: 'Trip Sharing', description: 'Users are able to share trips and follow others\' shared trips' },
      { image: '/img/xplore2.jpeg', title: 'AI EXPO 2025', description: 'The METRONIX team showcasing the app at the AI EXPO 2025' }
    ]
  }
]
