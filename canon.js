const canonData = [
    { name: "EOS 10D", cropFactor: 1.6 },
    { name: "EOS 1200D", cropFactor: 1.6 },
    { name: "EOS 1D", cropFactor: 1.3 },
    { name: "EOS 1D C", cropFactor: 1.0 },
    { name: "EOS 1D Mark II", cropFactor: 1.3 },
    { name: "EOS 1D Mark III", cropFactor: 1.3 },
    { name: "EOS 1D Mark IV", cropFactor: 1.3 },
    { name: "EOS 1D X", cropFactor: 1.0 },
    { name: "EOS 1D X Mark III", cropFactor: 1.0 },
    { name: "EOS 1Ds", cropFactor: 1.0 },
    { name: "EOS 1Ds Mark II", cropFactor: 1.0 },
    { name: "EOS 1Ds Mark III", cropFactor: 1.0 },
    { name: "EOS 20D", cropFactor: 1.6 },
    { name: "EOS 30D", cropFactor: 1.6 },
    { name: "EOS 300D", cropFactor: 1.6 },
    { name: "EOS 300V", cropFactor: 1.6 },
    { name: "EOS 40D", cropFactor: 1.6 },
    { name: "EOS 400D", cropFactor: 1.6 },
    { name: "EOS 450D", cropFactor: 1.6 },
    { name: "EOS 50D", cropFactor: 1.6 },
    { name: "EOS 5D", cropFactor: 1.0 },
    { name: "EOS 5D Mark II", cropFactor: 1.0 },
    { name: "EOS 5D Mark III", cropFactor: 1.0 },
    { name: "EOS 5D Mark IV", cropFactor: 1.0 },
    { name: "EOS 5DS", cropFactor: 1.0 },
    { name: "EOS 5DS R", cropFactor: 1.0 },
    { name: "EOS 60D", cropFactor: 1.6 },
    { name: "EOS 600D", cropFactor: 1.6 },
    { name: "EOS 650D", cropFactor: 1.6 },
    { name: "EOS 70D", cropFactor: 1.6 },
    { name: "EOS 77D", cropFactor: 1.6 },
    { name: "EOS 7D", cropFactor: 1.6 },
    { name: "EOS 7D Mark II", cropFactor: 1.6 },
    { name: "EOS 80D", cropFactor: 1.6 },
    { name: "EOS 90D", cropFactor: 1.6 },
    { name: "EOS D30", cropFactor: 1.6 },
    { name: "EOS D60", cropFactor: 1.6 },
    { name: "EOS M", cropFactor: 1.6 },
    { name: "EOS M100", cropFactor: 1.6 },
    { name: "EOS M2", cropFactor: 1.6 },
    { name: "EOS M3", cropFactor: 1.6 },
    { name: "EOS M50", cropFactor: 1.6 },
    { name: "EOS M50 Mark II", cropFactor: 1.6 },
    { name: "EOS M5", cropFactor: 1.6 },
    { name: "EOS M6", cropFactor: 1.6 },
    { name: "EOS M6 Mark II", cropFactor: 1.6 },
    { name: "EOS R", cropFactor: 1.0 },
    { name: "EOS R10", cropFactor: 1.6 },
    { name: "EOS R3", cropFactor: 1.0 },
    { name: "EOS R5", cropFactor: 1.0 },
    { name: "EOS R50", cropFactor: 1.6 },
    { name: "EOS R6", cropFactor: 1.0 },
    { name: "EOS R6 Mark II", cropFactor: 1.0 },
    { name: "EOS R7", cropFactor: 1.6 },
    { name: "EOS R8", cropFactor: 1.0 },
    { name: "EOS RP", cropFactor: 1.0 },
    { name: "EOS Rebel SL1", cropFactor: 1.6 },
    { name: "EOS Rebel SL2", cropFactor: 1.6 },
    { name: "EOS Rebel SL3", cropFactor: 1.6 },
    { name: "EOS Rebel T3", cropFactor: 1.6 },
    { name: "EOS Rebel T3i", cropFactor: 1.6 },
    { name: "EOS Rebel T4i", cropFactor: 1.6 },
    { name: "EOS Rebel T5", cropFactor: 1.6 },
    { name: "EOS Rebel T5i", cropFactor: 1.6 },
    { name: "EOS Rebel T6", cropFactor: 1.6 },
    { name: "EOS Rebel T6i", cropFactor: 1.6 },
    { name: "EOS Rebel T7", cropFactor: 1.6 },
    { name: "EOS Rebel T7i", cropFactor: 1.6 },
    { name: "EOS Rebel T8i", cropFactor: 1.6 },
    { name: "PowerShot G1 X", cropFactor: 1.85 },
    { name: "PowerShot G1 X Mark II", cropFactor: 1.85 },
    { name: "PowerShot G1 X Mark III", cropFactor: 1.6 },
    { name: "PowerShot G5 X", cropFactor: 2.7 },
    { name: "PowerShot G5 X Mark II", cropFactor: 2.7 },
    { name: "PowerShot G7 X", cropFactor: 2.7 },
    { name: "PowerShot G7 X Mark II", cropFactor: 2.7 },
    { name: "PowerShot G7 X Mark III", cropFactor: 2.7 },
    { name: "PowerShot G9 X", cropFactor: 2.7 },
    { name: "PowerShot G9 X Mark II", cropFactor: 2.7 },
    { name: "EOS 100D", cropFactor: 1.6 },
    { name: "EOS 200D", cropFactor: 1.6 },
    { name: "EOS 2000D", cropFactor: 1.6 },
    { name: "EOS 250D", cropFactor: 1.6 },
    { name: "EOS 3000D", cropFactor: 1.6 },
    { name: "EOS 1300D", cropFactor: 1.6 },
    { name: "EOS 1100D", cropFactor: 1.6 },
    { name: "EOS 1000D", cropFactor: 1.6 },
    { name: "EOS 4000D", cropFactor: 1.6 },
    { name: "EOS 750D", cropFactor: 1.6 },
    { name: "EOS 760D", cropFactor: 1.6 },
    { name: "EOS 800D", cropFactor: 1.6 },
    { name: "EOS 850D", cropFactor: 1.6 }
];

if (typeof populateBrand !== 'undefined') {
    populateBrand("Canon", canonData);
}
