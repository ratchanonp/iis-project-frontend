import { Review } from "lib/utils/interfaces";
import { Restaurant } from "lib/utils/interfaces/Restaurant.interface";

const faculty: string[] = [
	"คณะวิศวกรรมศาสตร์",
	"คณะอักษรศาสตร์",
	"คณะวิทยาศาสตร์",
	"คณะรัฐศาสตร์",
	"คณะสถาปัตยกรรมศาสตร์",
	"คณะพาณิชยศาสตร์และการบัญชี",
	"คณะครุศาสตร์",
	"คณะนิเทศศาสตร์",
	"คณะเศรษฐศาสตร์",
	"คณะแพทยศาสตร์",
	"คณะสัตวแพทยศาสตร์",
	"คณะทันตแพทยศาสตร์",
	"คณะเภสัชศาสตร์",
	"คณะนิติศาสตร์",
	"คณะศิลปกรรมศาสตร์",
	"คณะสหเวชศาสตร์",
	"คณะจิตวิทยา",
	"คณะวิทยาศาสตร์การกีฬา",
	"สำนักวิชาทรัพยากรการเกษตร",
	"สถาบันนวัตกรรมบูรณาการแห่งจุฬาฯ",
];

const restaurants: Array<Restaurant> = [
	{
		title: "ไก่ทอดวิดวะ",
		category: ["ของทอด", "อาหารอีสาน", "ยำ"],
		rating: 5.0,
		imageUrl: "/onechu.jpg",
		price: {
			min: 40,
			max: 100,
		},
	},
	{
		title: "ไก่ทอดวิดวะ",
		category: ["ของทอด", "อาหารอีสาน", "ยำ"],
		rating: 5.0,
		imageUrl: "/onechu.jpg",
		price: {
			min: 40,
			max: 100,
		},
	},
	{
		title: "ไก่ทอดวิดวะ",
		category: ["ของทอด", "อาหารอีสาน", "ยำ"],
		rating: 5.0,
		imageUrl: "/onechu.jpg",
		price: {
			min: 40,
			max: 100,
		},
	},
	{
		title: "ไก่ทอดวิดวะ",
		category: ["ของทอด", "อาหารอีสาน", "ยำ"],
		rating: 5.0,
		imageUrl: "/onechu.jpg",
		price: {
			min: 40,
			max: 100,
		},
	},
	{
		title: "ไก่ทอดวิดวะ",
		category: ["ของทอด", "อาหารอีสาน", "ยำ"],
		rating: 5.0,
		imageUrl: "/onechu.jpg",
		price: {
			min: 40,
			max: 100,
		},
	},
	{
		title: "ไก่ทอดวิดวะ",
		category: ["ของทอด", "อาหารอีสาน", "ยำ"],
		rating: 5.0,
		imageUrl: "/onechu.jpg",
		price: {
			min: 40,
			max: 100,
		},
	},
];

const reviewMock: Review = {
	restaurant: "ไก่ทอดวิดวะ",
	cafeteria: "วิทยาศาสตร์",
	rating: 5.0,
	comment: "อร่อยมากเลยค่ะ",
	create_at: "2022-10-10",
};

export { faculty, restaurants, reviewMock };
