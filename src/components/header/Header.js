import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import userImg from '../../img/icons/regularUsers.png'
import './Header.scss'

function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className="header__body">
					<div className="header__menu">
						<div className="header__logo"><h1><a href=""><span>S</span>ervise</a></h1></div>
						<div className="header__menu-list">
							<ul className="header__list">
								<li className="header__link"><a href="#">Создать задание</a></li>
								<li className="header__link"><a href="#">Найти задания</a></li>
								<li className="header__link"><a href="#">Мои заказы</a></li>
							</ul>
						</div>
					</div>
					<div className="header__user user">
						<div className="user__alert">
							<span className='user__alert__amount'>1</span>
							<a href="">
								<FontAwesomeIcon className='user__alert__icon' icon={faBell} />
							</a>
						</div>
						<div className="user__icon">
							<a href="#">
								<img src={userImg} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
