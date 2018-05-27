import { action, computed, observable } from 'mobx';

class TestStore {
    // #region Observables

    @observable
    public count: number = 0;

    // #endregion Observables


    // #region Computed Observables

    @computed
    public get square(): number {
        return Math.pow(this.count, 2);
    };

    // #endregion Computed Observables


    // #region Actions

    @action
    public incrementCount = (): void => {
        this.count++;
    }

    @action
    public decrementCount = (): void => {
        this.count--;
    }

    // #endregion Actions
}

const testStore = new TestStore();

export default testStore;
export { TestStore };