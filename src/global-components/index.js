import Vue from 'vue'
import ActionBtn from './ActionBtn.vue'
import InputImage from "@/global-components/InputImage.vue";
import VueModal from "@/global-components/VueModal";
import VueSelect from "@/global-components/VueSelect";
import VueTable from "@/global-components/VueTable";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import VueGoodTablePlugin from 'vue-good-table';
import OverlayCard from '@/global-components/OverlayCard.vue'
import {ValidationObserver,ValidationProvider} from 'vee-validate'
import 'vue-good-table/dist/vue-good-table.css'
import {
  faDoorOpen,
  faTrashRestore,
  faArrowRight,
  faEllipsisVertical,
  faTimes,
  faBuilding,
  faPlus,
  faUserSecret,
  faHouse,
  faBars,
  faGear,
  faAngleLeft,
  faAngleRight,
  faCoins,
  faStore,
  faUsers,
  faBorderAll,
  faListUl,
  faCar,
  faGears,
  faPen,
  faTrash,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faDoorOpen,
  faTrashRestore,
  faArrowRight,
  faListUl,
  faEllipsisVertical,
  faTimesCircle,
  faTimes,
  faPen,
  faBuilding,
  faGears,
  faPlus,
  faUserSecret,
  faHouse,
  faBars,
  faGear,
  faAngleLeft,
  faAngleRight,
  faCoins,
  faUsers,
  faStore,
  faBorderAll,
  faListUl,
  faCar,
  faTrash
);
Vue.use(VueGoodTablePlugin);
Vue.component("fa", FontAwesomeIcon);
Vue.component("input-image", InputImage);
Vue.component("vue-modal", VueModal);
Vue.component("vue-select",  VueSelect);
Vue.component("vue-table",  VueTable);
Vue.component("overlay-card",OverlayCard)
Vue.component("Action",  ActionBtn);
Vue.component("ValidationObserver",  ValidationObserver);
Vue.component("ValidationProvider",  ValidationProvider);