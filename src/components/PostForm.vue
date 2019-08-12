<template>
    <div class="container">
        <form @submit="onSubmit($event)" class="postForm">
            <div class="postForm__wrapper">
                <input v-model="title" v-bind:class="$v.title.$invalid ? 'error' : ''" type="text"  name="title" placeholder="Title" class="postForm__input">
                <div v-if="$v.title.$invalid" class="postForm__error"><span>Invalid title</span></div>
            </div>
            <div class="postForm__wrapper">
                <input v-model="description" v-bind:class="$v.description.$invalid ? 'error' : ''" type="text" name="description" placeholder="Description" class="postForm__input">
                <div v-if="$v.description.$invalid" class="postForm__error"><span>Invalid description</span></div>
            </div>            
            <button type="submit" value="Submit" :disabled="$v.$invalid" class="postForm__submit">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import { Validate } from 'vuelidate-property-decorators';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import PostsModule from '@/store/modules/Posts.module';
import { mapActions } from 'vuex';

@Component({
    mixins: [ validationMixin ]
})
export default class PostForm extends Vue {
    @Validate({ required })
    @Provide() title: string = '';
    @Validate({ required })
    @Provide() description: string = '';

    onSubmit(event: any) {
        event.preventDefault();
        const post = {
            title: this.title,
            description: this.description
        }
        if(!this.$v.$invalid) {
            PostsModule.addNew(post);
        }
    }
}
</script>

<style lang="scss" scoped>
.postForm {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__wrapper {
        margin: 10px 0;
    }

    &__input {
        padding: 10px 5px;
        &.error {
            border: 1px solid crimson;
        }
    }

    &__submit {
        align-self: center;
        padding: 10px 20px;
        width: 100px;

        &[disabled] {
            opacity: 0.4;
            border-color: crimson;
            color: crimson;
        }
    }

    &__error {
        margin-top: 5px;
        color: crimson;
        text-align: left;
        font-size: 12px;
    }
}
</style>