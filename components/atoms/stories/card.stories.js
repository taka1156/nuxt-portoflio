import { storiesOf } from '@storybook/vue';
import { text } from '@storybook/addon-knobs/vue';
import CardTitle from '../CardTitle.vue';
import CardImg from '../CardImg.vue';
import CardText from '../CardText.vue';
import CardButton from '../CardButton.vue';

storiesOf('Atoms/Card/CardTitle', module).add(
  'default',
  () => ({
    components: { CardTitle },
    template: '<card-title :card-title="text" />',
    props: {
      text: {
        type: String,
        default: text('text', 'text'),
      },
    },
  }),
  {
    info: {
      summary: 'カードのタイトル',
    },
  }
);

storiesOf('Atoms/Card/CardImg', module).add(
  'default',
  () => ({
    components: { CardImg },
    template: '<card-img :card-img="path" />',
    props: {
      path: {
        type: String,
        default: text('path', 'http://placehold.jp/150x150.png'),
      },
    },
  }),
  {
    info: {
      summary: '画像',
    },
  }
);

storiesOf('Atoms/Card/CardText', module).add(
  'default',
  () => ({
    components: { CardText },
    template: '<card-text :card-text="text" />',
    props: {
      text: {
        type: String,
        default: text('text', 'text'),
      },
    },
  }),
  {
    info: {
      summary: '画像の説明',
    },
  }
);

storiesOf('Atoms/Card/CardButton', module).add(
  'default',
  () => ({
    components: { CardButton },
    template: '<card-button>Button</card-button>',
  }),
  {
    info: {
      summary: 'ボタン',
    },
  }
);
