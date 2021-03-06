import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { SettingsSelectionComponent } from './pages/settings-selection/settings-selection.component';
import { KeyboardComponent } from './cmps/keyboard/keyboard.component';
import { KeyboardClickDirective } from './directives/keyboard-click.directive';
import { ScoreComponent } from './cmps/score/score.component';
import { EndingScreenComponent } from './pages/ending-screen/ending-screen.component';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SettingsSelectionComponent,
    KeyboardComponent,
    KeyboardClickDirective,
    ScoreComponent,
    EndingScreenComponent,
    LeaderboardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
