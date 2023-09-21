import React from "react";

function EditProfileName(name, newName){
  return(
    <>
    <div>
     <div className="wrapper_background_Modif">
      <div className="profile_name_mod_container">
       <header className="">
       <div className="">
            <h4 className="a-popover-header-content" id="a-popover-header-1">Edit your name</h4>
              <button data-action="a-popover-close" className=" a-button-close a-declarative" aria-label="Close">
               <i className="a-icon a-icon-close"></i>
              </button>
       </div>
       </header>
       <div className="">
          <p>
            By saving your account name will change to a new name added
          </p>
          <input type="text" name="" id=""/>
          <div className="submition_part_profile">
            <input type="submit" name="" />
          </div>
       </div>
      </div>
     </div>
    </div>
    </>
  )
}
export default EditProfileName;
