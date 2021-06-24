#include <iostream>
#include <tuple>

struct Item {
	const char* positive_name = "";
	int positive_price = 0;
};

std::tuple<const char*, const char*, int> item_tuple[] = {
	{"item_barter_energy_powerbank","Powerbank", 20391},
	{"item_car_battery","Car battery", 61563},
	{"item_battery_d","D Size Battery", 2207},
	{"item_barter_energy_greenbat","GreenBat lithium battery", 26000},
	{"item_energy_accum","Rechargeable battery", 17035},
	{"item_battery_aa","AA Battery", 652},
	{"item_barter_energy_batterymilitary","6-STEN-140-M military battery", 330000},
	{"item_barter_energy_cyclon","Cyclon accumulator battery", 85000},
	{"item_barter_household_foam","Xenomorph sealing foam", 3778},
	{"item_ducttape","Duct tape", 2499},
	{"item_barter_building_plexiglass","Piece of plexiglas", 8658},
	{"item_barter_building_thermometer","Analog thermometer", 45600},
	{"item_barter_building_hose","Corrugated hose", 12201}
};

Item get_item( const char* negative_name ) {
	Item my_item { "" , 0 };
	for ( const auto& item : item_tuple )
		if ( (const char*)std::get<0>(item) == negative_name )
			my_item = Item { (const char*)std::get<1>(item) , std::get<2>(item) };
	return my_item;
}

int main(int argc, char* argv[])
{
	// made by swenenzy for eft cheat .D
	std::cout << get_item("item_battery_aa").positive_name << std::endl;
	std::cout << get_item("item_ducttape").positive_price << std::endl;

	std::cout << get_item("no_item_in_list").positive_name << std::endl;
	std::cout << get_item("no_item_in_list").positive_price << std::endl;
	getchar();
}
