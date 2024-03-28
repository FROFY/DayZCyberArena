import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SiteCardComponent } from '../site-card/site-card.component';
import { JoinDiscordComponent } from '../join-discord/join-discord.component';
import { FooterComponent } from '../footer/footer.component';
import { SiteCard } from '../../../models/site-card/site-card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, HeaderComponent, SiteCardComponent, JoinDiscordComponent, FooterComponent, NgFor],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  siteCards: Array<SiteCard> = [
    {
      pictureSource: '../../../assets/images/Firstpic.png',
      textHeader: 'ПЕРВЫЙ СЕРВЕР DAYZ STANDALONE',
      textArray: {
        firstText: 'С реалистичными схватками за звание лучшего воина. Схватки в режиме “Команда против команды” и “Один против всех”.',
        secondText: 'Любите с друзьями PVP? Думаете, что переиграете любую команду? Попробуйте это доказать, оставшись единственной командой на поле боя.',
        thirdText: 'Или игратешь в формате одиночки и любишь охотиться за жертвой, словно хищник? Останься последним на арене и забери главный приз. Докажи, что именно ТЫ — лучший выживший.'
      },
      flexStyle: '',
      textAlign: 'margin-left: 42px;',
    },
    {
      pictureSource: '../../../assets/images/Secondpic.png',
      textHeader: 'ПРЕИМУЩЕСТВА СЕРВЕРА',
      textArray: {
        firstText: 'Отсутствие модификаций на оружие — только ванила. Открытая и прозрачная система урона. Здесь нет имба оружий, которые позволят ваншотить врага.',
        secondText: '3 типа бронежилетов — легкий, средний и тяжелый. Каждой команде выдается ограниченное количество каждого бронежилета.',
        thirdText: 'Advanced Weapon Scopes — одна из самых популярных модификаций. Количество на команду ограничено. Прицел с ПНВ ни раз пригодится.'
      },
      flexStyle: 'flex-direction: row-reverse;',
      textAlign: 'text-align: right; margin-right: 42px',
    },
    {
      pictureSource: '../../../assets/images/Thirdpic.png',
      textHeader: 'СИСТЕМА НАГРАД',
      textArray: {
        firstText: 'Чем выше занятое место — тем ценнее приз. Каждая команда вносит в призовой форд требуемую сумму. Призовые места делят фонд между собой по окончании битвы.',
        secondText: 'Режим битвы будет меняться: PlayOff или Double Elimination. Шансы на победу будут у всех. Даже после ошибки в бою.',
        thirdText: 'Администрация также пополняет призовой фонд. Как часто будет открываться Арена — решать игрокам. Перед турниром будет открыта тренировочная Арена для того чтобы команды или одиночные игроки отточили свои навыки перед настоящим турниром.'
      },
      flexStyle: '',
      textAlign: 'margin-left: 42px;',
    },
    {
      pictureSource: '../../../assets/images/Fourpic.png',
      textHeader: 'АДМИНИСТРИРОВАНИЕ',
      textArray: {
        firstText: 'Турниры проводятся на официальной Steam версии игры под защитой BattleEye. ',
        secondText: 'Администрация будет наблюдать за каждым турниром в режиме реального времени, чтобы исключить возможность использования стороннего программного обеспечения.',
        thirdText: 'Перед регистрацией на турнир, игроки каждой команды будут тщательно проверяться. Использовать чужой аккаунт с запрещенным ПО не получится — наша система распознает это. Если игрок команды будет заподозрен в использовании запрещенного ПО — команда будет немедленно дисквалифицирована и начнется переигровка турнира.'
      },
      flexStyle: 'flex-direction: row-reverse;',
      textAlign: 'text-align: right; margin-right: 42px',
    },
  ]
}