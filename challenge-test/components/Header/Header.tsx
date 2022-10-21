import React, { Component, ReactNode } from "react";
import Image from 'next/image';

class Header extends Component { 		
    render(): ReactNode {
    const URL_PHOTO = '/icons/fav.png';

		return (
			<header className="header"> 
       <Image
          src={URL_PHOTO}
          width={45}
          height={45}
          alt=""
        />
        <span className="title-header"> 
          Challenge Assessment
        </span>
      </header>
    )
	}
}

export default Header;
