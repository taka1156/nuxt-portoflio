import { mount, RouterLinkStub } from '@vue/test-utils';
import NavListItem from './NavListItem.vue';
import { dummyRoutes } from '@/__testdata__/testdata.js';

describe('NavListItem', () => {
  const navListItem = mount(NavListItem, {
    // <nuxt-link>をRouterLinkStubで探せるようになる
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    propsData: {
      navItem: dummyRoutes[0],
    },
  });

  it('NavList初期値: navItem', () => {
    // NavItme
    expect(navListItem.vm.$options.props.navItem.required).toBe(true);
    console.log(navListItem.vm.$options.props.navItem.default());
    expect(navListItem.vm.navItem).toBe(dummyRoutes[0]);
  });

  it('値がDOMに反映されているか', () => {
    const aTag = navListItem.findComponent(RouterLinkStub);
    const imgTag = navListItem.find('img');

    expect(aTag.props().to).toBe(dummyRoutes[0].to);
    expect(aTag.text()).toBe(dummyRoutes[0].name);
    expect(imgTag.attributes().src).toBe(dummyRoutes[0].img);
    // スナップショット
    expect(navListItem.html()).toMatchSnapshot();
  });

  it('changeStateを実行した時、`change-state`のイベントが発生するか', () => {
    navListItem.vm.changeState();
    expect(navListItem.emitted('change-state')).toBeTruthy();
  });
});
