import initial1 from '../../../img/initial-1.png'
import initial2 from '../../../img/initial-2.png'
import initial3 from '../../../img/initial-3.png'
import './Initial.scss'

function Initial() {
	return (
		<>
			<div className="initial">
				<div className="container">
					<div className="row initial__body">
						<div className="col-6 initial__content">
							<div className="initial__content__title">
								<h1>Освободим вас от забот</h1>
								<p>Поможем найти надёжного исполнителя для любых задач</p>
							</div>
							<div className="initial__content__search">
								<div className="initial__content__search-body">
									<input placeholder='Напишите, чем вам помочь' type="text" name="#" id="" />
									<button type="submit">Найти</button>
								</div>
							</div>
						</div>
						<div className="col-6 initial__image">
							<div className="initial__image__body">
								<div className="initial__image__body__large">
									<img src={initial1} alt="" />
								</div>
								<div className="initial__image__body__both">
									<div className="initial__image__body__both__image1">
										<img src={initial2} alt="" />
									</div>
									<div className="initial__image__body__both__image2">
										<img src={initial3} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}
export default Initial;
