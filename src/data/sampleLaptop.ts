import { ComputerModel } from '../interfaces/ComputerModel';

export const sampleLaptop: ComputerModel = {
	specs: [
		{
			name: 'Screen',
			parts: [
				{
					name: '13" Retina',
					price: 400
				},
				{
					name: '15" Retina',
					price: 700
				}
			]
		},
		{
			name: 'CPU',
			parts: [
				{
					name: '2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz',
					price: 300
				},
				{
					name: '2.9GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.8GHz',
					price: 500
				}
			]
		},
		{
			name: 'Storage',
			parts: [
				{
					name: '512GB PCIe-based SSD',
					price: 100
				},
				{
					name: '1TB PCIe-based SSD',
					price: 200
				},
				{
					name: '2TB PCIe-based SSD',
					price: 250
				}
			]
		},
		{
			name: 'Memory',
			parts: [
				{
					name: '8 GB 2133MHz memory',
					price: 100
				},
				{
					name: '16 GB 2133MHz memory',
					price: 150
				}
			]
		},
		{
			name: 'Graphics',
			parts: [
				{
					name: 'Radeon Pro 455 with 2GB memory',
					price: 300
				},
				{
					name: 'Radeon Pro 460 with 4GB memory',
					price: 400
				}
			]
		}
	]
};
