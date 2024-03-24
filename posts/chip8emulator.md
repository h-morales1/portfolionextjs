---
title: "Chip8 Emulator"
summary: "Emulate a virtual machine from the 70s and allow ROMS for that machine to be read."
---

# Chip8 Emulator [(**_Repo_**)](https://gitlab.com/Holzelh/chip8-emulator)

Tech used:

- C++
- SDL2
- Make
- Binary operations
- Git

---

## What does the project do?

The application will accept a Chip8 ROM as a parameter during execution of the binary.
The ROM file itself is just a file containing a long list of numbers.
The emulator is able to read the entire file, decode the numbers into valid instructions for the CPU to process.
From a single file, an animation like the one below can be displayed or a simple game of Pong can be played.

![ROM demo](/projectImages/chip8emulator/trip8Demo.gif)

The Emulator has a CPU that is capable of decoding 38 unique instructions.
This means that the emulator can detect up to 38 different instructions from a file containing valid Chip8 instructions.
A file containing random numbers will produce odd results if read using the emulator, but a chip8 ROM file will either result in a game or some picture being drawn to the 64 by 32 pixel display.

```c++
              //instructions
              void op0x00(uint16_t op);
              void op0x00e0(uint16_t op);
              void op0x00ee(uint16_t op);
              void op0x01(uint16_t op);
              void op0x02(uint16_t op);
              void op0x03(uint16_t op);
              void op0x0f55(uint16_t op);
              void op0x0f65(uint16_t op);
              // more ...
```

Each instruction is coded as a method with no return.
These methods which act as CPU instructions for the emulator will
perform specific operations depending on the CPU instruction. This
can range from jumping to a specific memory address or clearing the screen.

```c++
void chip8::op0x01(uint16_t op)
{
    //jump to nnn
    uint16_t addr = op & 0x0FFF; // binary math to extract addr

    if(getPC() == addr)
    {
        cout << "Error trying to hault!" << '\n';
        exit(1);
    }
    setPC(addr); // perform jump
}
```

The above is an example of a chip8 instruction or opcode.
This instruction is supposed to take in the entire opcode, perform binary math to extract a memory address, check if that memory address is equal to the program counter register, if it is then the emulation cycle is haulted, otherwise it sets the program counter register equal to the extracted memory address.
That will mean that the address in memory the CPU will next read from will be the address just set by this instruction, meaning the jump to nnn has concluded.

## Conclusion

An emulator in general has a cycle it runs through in order to "run".
This emulator is the "hello world" to emulation because of how simple that cycle is.
Each instruction is exactly the same size in bytes, meaning the CPU simply needs to read 2 bytes at a time.
Since instructions are stored in big endian, meaning the most significant byte of the instruction is stored at the smallest memory address and the least significant byte is stored at the largest memory address, the emulator will first look at the first byte, determine which instruction it is, and then use the remaining byte for any processing done by that instruction, the program counter might be increased by the instruction or set to a specific address specified within the second byte of the instruction.
This loop is done until the user ends the program.
