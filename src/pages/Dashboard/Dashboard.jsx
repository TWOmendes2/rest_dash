import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber } from '../../data';
import css from './Dashboard.module.css';
const Dashboard = () => {
  return <div className={css.container}>

    {/* left side */}
    <div className={css.dashboard}>
      
      <div className={`${css.dashboardHead} theme-container`}>
        <div className={css.head}>
          <span>Dashboard</span>

          <div className={css.durationButton}>
            <select>
              <option value="">1 Semana</option>
              <option value="">1 Mês</option>
              <option value="">1 Ano</option>
            </select>
          </div>
        </div>
          <div className={css.cards}>
            {
              cardsData.map((card, index)=> (
                <div className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>

                  <div className={css.cardAmount}>
                    <span>R$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
      </div>



      <Statistics/>

    </div>


      <Orders/>
  </div>
}

export default Dashboard