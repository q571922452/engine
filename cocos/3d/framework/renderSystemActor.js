import Component from '../../components/CCComponent';

class RenderSystemActorListener {
    constructor() {
        this._renderSystem = null;
    }

    onRenderableComponentCreated(comp) {
        if(this._renderSystem === null) {
            this._renderSystem = cc.director._renderSystem;
        }
        comp._system = this._renderSystem;
        if (this._renderSystem) {
            comp._scene = this._renderSystem.scene;
        }
    }
}

let listener = new RenderSystemActorListener();

/**
 * @class RenderSystemActor
 * @extends Component
 * RenderSystemActor is used to access Rendersystem
 */
export default class RenderSystemActor extends Component {
    constructor() {
        super();
        this._system = null;
        this._scene = null;
        listener.onRenderableComponentCreated(this);
    }

    get renderSystem() {
        return this._system;
    }

    get scene() {
        return this._scene;
    }
}
