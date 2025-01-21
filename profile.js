class Profile {

  test_select_elements_list(){

	const profiles = document.getElementsByClassName("profile");
	console.log(profiles);

  }

  test_query_selector(){
  	const first_profile = document.querySelector(".profile");
  	console.log(first_profile);
  }

  test_query_SelectorAll(){
  	const all_profiles = document.querySelectorAll(".profile");
  	console.log(all_profiles);
  }


  countProfies(){
	var total_profiles = document.getElementsByTagName("p");
	console.log("total profiles tags are:" + total_profiles.length);
 }

}


const profileInstance = new Profile();
