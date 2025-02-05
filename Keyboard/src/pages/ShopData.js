import keyboard1 from '../assets/keyboard1.jpg';
import keyboard2 from '../assets/keyboard2.jpg';
import keyboard3 from '../assets/keyboard3.jpg';
import keyboard4 from '../assets/keyboard4.jpg';
import keyboard5 from '../assets/keyboard5.jpg';
import keyboard6 from '../assets/keyboard6.jpg';
import keyboard7 from '../assets/keyboard7.jpg';
import keyboard8 from '../assets/keyboard8.jpg';
import keyboard9 from '../assets/keyboard9.jpg';
import keyboard10 from '../assets/keyboard10.jpg';

export const products = [
    {
      id: 1,
      name: 'Keyboard 1',
      image: keyboard1,
      description: 'A high-quality mechanical keyboard designed for peak performance, ideal for casual gaming.',
      colors: ['Black', 'White', 'Gray'],
      switches: ['Red', 'Blue', 'Brown'],
      keyFeatures: ['Durable build', 'Plug-and-play', 'Static RGB lighting'],
      actuationForce: { Red: '45g', Blue: '60g', Brown: '55g' },
      connectivity: 'Wired (USB-C)',
      lighting: 'Static RGB with 3 preset effects',
      accessories: ['USB cable', 'Keycap puller'],
      warranty: '1-Year Warranty',
      price: '90',
    },
    {
      id: 2,
      name: 'Keyboard 2',
      image: keyboard2,
      description: 'Compact design with premium RGB lighting, perfect for office and gaming setups.',
      colors: ['Black', 'Silver'],
      switches: ['Red', 'Green', 'Blue'],
      keyFeatures: ['Compact design', 'Limited RGB modes', 'Durable keycaps'],
      actuationForce: { Red: '45g', Green: '70g', Blue: '60g' },
      connectivity: 'Wired (USB-C)',
      lighting: 'Static RGB with 5 preset effects',
      accessories: ['USB-C cable', 'Detachable wrist rest'],
      warranty: '1-Year Warranty',
      price: '85',
    },
    {
      id: 3,
      name: 'Keyboard 3',
      image: keyboard3,
      description: 'Ergonomic keyboard with a sleek design, perfect for typing enthusiasts.',
      colors: ['White', 'Gray'],
      switches: ['Brown', 'Clear'],
      keyFeatures: ['Ergonomic design', 'Quiet switches', 'Static backlighting'],
      actuationForce: { Brown: '55g', Clear: '50g' },
      connectivity: 'Wired (USB-C)',
      lighting: 'White LED with adjustable brightness',
      accessories: ['Keycap puller', 'Cable management clips'],
      warranty: '1-Year Warranty',
      price: '95',
    },
    {
      id: 4,
      name: 'Keyboard 4',
      image: keyboard4,
      description: 'RGB-enabled keyboard with high-quality switches for gaming performance.',
      colors: ['Black', 'White'],
      switches: ['Yellow', 'Blue', 'Brown'],
      keyFeatures: ['Gaming optimized', 'Anti-ghosting keys', 'Limited RGB zones'],
      actuationForce: { Yellow: '50g', Blue: '60g', Brown: '55g' },
      connectivity: 'Wired (USB-C)',
      lighting: 'Static RGB with gaming effects',
      accessories: ['Braided USB cable', 'Keycap puller'],
      warranty: '1-Year Warranty',
      price: '100',
    },
    {
      id: 5,
      name: 'Keyboard 5',
      image: keyboard5,
      description: 'A premium keyboard with adjustable backlighting and responsive keys.',
      colors: ['Black', 'Silver'],
      switches: ['Green', 'Blue'],
      keyFeatures: ['Adjustable backlighting', 'Responsive keys', 'Durable build'],
      actuationForce: { Green: '70g', Blue: '60g' },
      connectivity: 'Wired (USB-C)',
      lighting: 'Adjustable brightness with white LEDs',
      accessories: ['Keycap puller', 'Detachable USB cable'],
      warranty: '1-Year Warranty',
      price: '110',
    },
    {
      id: 6,
      name: 'Keyboard 6',
      image: keyboard6,
      description: 'A fully customizable mechanical keyboard with premium build quality and endless possibilities.',
      customOptions: {
        switches: ['Red', 'Blue', 'Brown', 'Clear'],
        keycaps: ['PBT', 'ABS', 'Double Shot'],
        boardColors: ['Black', 'White', 'Gray'],
      },
      keyFeatures: ['Hot-swappable switches', 'Per-key RGB lighting', 'Programmable keys'],
      actuationForce: { Red: '45g', Blue: '60g', Brown: '55g', Clear: '50g' },
      connectivity: 'Tri-mode (USB-C, Bluetooth, 2.4 GHz)',
      lighting: 'Customizable per-key RGB with multiple effects',
      accessories: ['Extra switches', 'Switch puller', 'Carrying case'],
      softwareCompatibility: ['Windows', 'Mac', 'Linux'],
      warranty: '3-Year Warranty',
      price: '250',
    },
    {
      id: 7,
      name: 'Keyboard 7',
      image: keyboard7,
      description: 'Fully customizable keyboard with premium materials for enthusiasts.',
      customOptions: {
        switches: ['Yellow', 'Green', 'Blue'],
        keycaps: ['Double Shot', 'PBT'],
        boardColors: ['Silver', 'Black'],
      },
      keyFeatures: ['Hot-swappable switches', 'Per-key RGB', 'Advanced software support'],
      actuationForce: { Yellow: '50g', Green: '70g', Blue: '60g' },
      connectivity: 'Tri-mode (USB-C, Bluetooth, 2.4 GHz)',
      lighting: 'Per-key RGB with advanced effects',
      accessories: ['Premium keycaps', 'Switch puller', 'Carrying pouch'],
      softwareCompatibility: ['Windows', 'Mac'],
      warranty: '3-Year Warranty',
      price: '280',
    },
    {
      id: 8,
      name: 'Keyboard 8',
      image: keyboard8,
      description: 'Customizable keyboard with adjustable features for typing and gaming.',
      customOptions: {
        switches: ['Brown', 'Red'],
        keycaps: ['PBT', 'ABS'],
        boardColors: ['White', 'Gray'],
      },
      keyFeatures: ['Adjustable actuation points', 'Hot-swappable switches', 'Per-key RGB'],
      actuationForce: { Brown: '55g', Red: '45g' },
      connectivity: 'Tri-mode (USB-C, Bluetooth, 2.4 GHz)',
      lighting: 'Customizable RGB with multiple effects',
      accessories: ['Detachable wrist rest', 'Switch puller', 'Extra keycaps'],
      softwareCompatibility: ['Windows', 'Linux'],
      warranty: '3-Year Warranty',
      price: '230',
    },
    {
      id: 9,
      name: 'Keyboard 9',
      image: keyboard9,
      description: 'High-quality fully customizable keyboard for enthusiasts and gamers.',
      customOptions: {
        switches: ['Red', 'Clear'],
        keycaps: ['ABS', 'Double Shot'],
        boardColors: ['Black', 'White'],
      },
      keyFeatures: ['Modular design', 'Hot-swappable switches', 'Advanced RGB lighting'],
      actuationForce: { Red: '45g', Clear: '50g' },
      connectivity: 'Tri-mode (USB-C, Bluetooth, 2.4 GHz)',
      lighting: 'Customizable per-key RGB',
      accessories: ['Extra switches', 'Switch puller', 'Carrying case'],
      softwareCompatibility: ['Windows', 'Mac'],
      warranty: '3-Year Warranty',
      price: '240',
    },
    {
      id: 10,
      name: 'Keyboard 10',
      image: keyboard10,
      description: 'Top-tier customizable keyboard with premium design and unmatched versatility.',
      customOptions: {
        switches: ['Blue', 'Brown'],
        keycaps: ['PBT', 'Double Shot'],
        boardColors: ['Gray', 'Silver'],
      },
      keyFeatures: ['Hot-swappable switches', 'Per-key RGB lighting', 'Premium build quality'],
      actuationForce: { Blue: '60g', Brown: '55g' },
      connectivity: 'Tri-mode (USB-C, Bluetooth, 2.4 GHz)',
      lighting: 'Dynamic RGB with customizable effects',
      accessories: ['Premium carrying case', 'Switch puller', 'Extra switches'],
      softwareCompatibility: ['Windows', 'Mac', 'Linux'],
      warranty: '3-Year Warranty',
      price: '300',
    },
  ];

