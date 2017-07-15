import { h, Component } from 'preact';
import style from './style';
import Hero from '../../components/hero';
import Events from '../../components/events';
import Media from '../../components/media';
import Community from '../../components/community';
import CodeOfConduct from '../../components/coc';

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <Hero />
        <Events />
        <Media />
        <Community />
        <CodeOfConduct />
      </div>
    );
  }
}