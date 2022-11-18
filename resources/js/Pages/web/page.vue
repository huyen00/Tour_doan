<template>
  <section class="content">
    <!-- <ContextMenu /> -->
    <ContentHeaderVue :name="'Page'" :icon="'fa fa-home'" />
    <BreadCrumb :crumbs="crumbs" />

    <button
      type="button"
      class="inline-block px-8 py-4 bg-blue-600 text-white font-black text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      data-toggle="modal"
      data-target="#exampleModal"
   
    >Create Page</button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <h5 class="modal-title" id="exampleModalLabel" v-if="editMode">Update Pages</h5>
            <h5 class="modal-title" id="exampleModalLabel" v-else>Create Pages</h5> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form >
              <div class="form-group" :class="errors.name ? 'is-valid' :''">
                <div class="list_form_page">
                  <div class="item_form_page w-4/12 pr-6 ">  
                    <label for="recipient-name" class="col-form-label">Title key:</label>
                    <input
                      type="text"
                      class="form-control text-xl"
                      :class="errors.name ? 'is-valid' :''"
                      v-model="form.name"
                      id="recipient-name"
                    />
                  </div>
                  <div class="item_form_page w-4/12 pl-6">
                    <label for="recipient-name" class="col-form-label">Title English:</label>
                    <input
                      type="text"
                      class="form-control text-xl"
                      :class="errors.name ? 'is-valid' :''"
                      v-model="form.name"
                      id="recipient-name"
                    />
                  </div>
                  <div class="item_form_page w-4/12 pl-6">
                    <label for="recipient-name" class="col-form-label">Title VietNam:</label>
                    <input
                      type="text"
                      class="form-control text-xl"
                      :class="errors.name ? 'is-valid' :''"
                      v-model="form.name"
                      id="recipient-name"
                    />
                  </div>
                </div>
                <div class="list_form_page">
                  <div class="item_form_page w-6/12 pr-6 ">  
                    <label for="recipient-name" class="col-form-label">Description_en:</label>
                    <input
                      type="text"
                      class="form-control text-xl"
                      :class="errors.name ? 'is-valid' :''"
                      v-model="form.name"
                      id="recipient-name"
                    />
                  </div>
                  <div class="item_form_page w-6/12 pl-6">
                    <label for="recipient-name" class="col-form-label">Description_vn:</label>
                    <input
                      type="text"
                      class="form-control text-xl"
                      :class="errors.name ? 'is-valid' :''"
                      v-model="form.name"
                      id="recipient-name"
                    />
                  </div>
                </div>
                <!-- <div class="text-red-500" v-if="errors.name">{{ errors.name }}</div> -->
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-black text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                  data-dismiss="modal"
                >Close</button>
                <button
             
                  type="submit"
                  class="inline-block px-6 py-2.5 bg-gray-800 text-white font-black text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >Save changes</button>
              </div>
            </form>
          </div>

          
        </div>
      </div>
    </div>

   <!-- <div class="page_content">
     <el-table >
        <el-table-comlum label="STT"></el-table-comlum>
        <el-table-comlum label="Tite"></el-table-comlum>
        <el-table-comlum label="Description"></el-table-comlum>
        <el-table-comlum label="Action"></el-table-comlum>
     </el-table>
   </div> -->
  <!-- <div class="flex flex-col mt-6">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xl font-back text-gray-500 uppercase tracking-wider"
                  >id</th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xl font-back text-gray-500 uppercase tracking-wider"
                  >title</th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xl font-back text-gray-500 uppercase tracking-wider"
                  >description</th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(pages,index) in pages" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-xl font-medium text-gray-900">{{ index }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-xl text-gray-900">{{ pages.title }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-xl text-gray-900">{{ pages.description }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      v-for="pages in pages"
                      :key="pages.index"
                      class="bg-gray-600 text-gray-100 text-xl px-2 mx-1 py-1 rounded"
                    >{{ pages.title }}</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      data-toggle="modal"
                      data-target="#exampleModal"
                      class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-black text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                      @click="edit(pages)"
                    >Update</button>
                    <button
                      @click="deleteRow(pages.id)"
                      class="inline-block px-6 py-2.5 bg-gray-800 text-white font-black text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                    >Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <pagination class="mt-6" :links="roles.links" />
          </div>
        </div>
      </div>
    </div>  -->
  </section>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue";
import Layout from "@/Components/Layout/Layout";
import ContentHeaderVue from "@/Components/Layout/ContentHeader";
import Pagination from "@/Components/Pagination";
import BreadCrumb from "@/Pages/Tour/BreadCrumb";
import Alert from "@/Components/Alert";

export default {
  layout: Layout,
  components: {
    Link,
    Head,
    ContentHeaderVue,
 
    BreadCrumb,
 
  },
  props:{
    errors:Object
   
  },
  data() {
    return {
     
      form: this.$inertia.form({
        id: null,
        name: null
      }),
      crumbs: [
        {
          route: "page.index",
          parma: null,
          name: "Page"
        }
      ]
    };
  },
  
  methods:{
   
  },
};
</script>
<style>
.list_form_page{
  display:flex;
}

</style>
